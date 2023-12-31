import {Model} from "../model/Model";
import {
    Errors,
    ValidationPropertyDecoratorDefinition,
    ModelErrors, IValidatorRegistry
} from "./types";
import {ValidatorRegistry} from "./ValidatorRegistry";
import {getPropertyDecorators} from '../utils'
import {ValidationKeys} from "./constants";
import {ModelErrorDefinition} from "../model/ModelErrorDefinition";
import {ModelKeys} from "../model";
import TypeValidator from "./Validators/TypeValidator";
import Validator from "./Validators/Validator";

let actingValidatorRegistry: IValidatorRegistry<Validator> | undefined = undefined;

/**
 * Returns the current ValidatorRegistry
 *
 * @return IValidatorRegistry, defaults to {@link ValidatorRegistry}
 *
 * @function getValidatorRegistry
 *
 * @memberOf Validation
 */
export function getValidatorRegistry(){
    if (!actingValidatorRegistry)
        actingValidatorRegistry = new ValidatorRegistry({validator: TypeValidator, validationKey: ModelKeys.TYPE});
    return actingValidatorRegistry;
}

/**
 * Returns the current ValidatorRegistry
 *
 * @prop {IValidatorRegistry} validatorRegistry the new implementation of the validator Registry
 * @prop {function(Validator): Validator} [migrationHandler] the method to map the validator if required;
 *
 * @function getValidatorRegistry
 *
 * @memberOf Validation
 */
export function setValidatorRegistry(validatorRegistry: IValidatorRegistry<Validator>, migrationHandler?: (validator: Validator) => Validator){
    if (migrationHandler && actingValidatorRegistry)
        actingValidatorRegistry.getKeys().forEach(k => {
            const validator = validatorRegistry.get(k);
            if (validator)
                validatorRegistry.register(migrationHandler(validator))
        });
    actingValidatorRegistry = validatorRegistry;
}

/**
 * Analyses the decorations of the properties and validates the obj according to them
 *
 * @typedef T extends Model
 * @prop {T} obj Model object to validate
 * @prop {string[]} [propsToIgnore] object properties to ignore in the validation
 *
 * @function validate
 *
 * @memberOf Validation
 */
export function validate<T extends Model>(obj: T, ...propsToIgnore: string[]) : ModelErrorDefinition | undefined {
    const decoratedProperties: ValidationPropertyDecoratorDefinition[] = [];
    for (let prop in obj)
        if (obj.hasOwnProperty(prop) && propsToIgnore.indexOf(prop) === -1)
            decoratedProperties.push(getPropertyDecorators(ValidationKeys.REFLECT, obj, prop));

    const result =  decoratedProperties.reduce((accum: undefined | ModelErrors, decoratedProperty: ValidationPropertyDecoratorDefinition) => {
        const {prop, decorators} = decoratedProperty;

        if (!decorators || !decorators.length)
            return accum;

        // @ts-ignore
        const defaultTypeDecorator: {key: string, props: {name: string}} = decorators[0];

        // tries to find any type decorators or other decorators that already enforce type (the ones with the allowed types property defined). if so, skip the default type verification
        if (decorators.find(d => {
            if (d.key === ValidationKeys.TYPE)
                return true;
            if (d.props.types?.find(t => t === defaultTypeDecorator.props.name))
                return true;
            return false;
        }))
            decorators.shift(); // remove the design:type decorator, since the type will already be checked

        const errs: {[indexer: string]: Errors} | undefined = decorators.reduce((acc: undefined | {[indexer: string]: Errors}, decorator: {key: string, props: {}}) => {
            const validator = getValidatorRegistry().get(decorator.key);
            if (!validator){
                console.error(`Could not find Matching validator for ${decorator.key} for property ${String(decoratedProperty.prop)}`);
                return acc;
            }

            const err: Errors = validator.hasErrors(obj[prop.toString()], ...(decorator.key === ModelKeys.TYPE ? [decorator.props] : Object.values(decorator.props)));
            if (err){
                acc = acc || {};
                acc[decorator.key] = err;
            }

            return acc;
        }, undefined);

        if (errs){
            accum = accum || {};
            accum[decoratedProperty.prop.toString()] = errs;
        }

        return accum;
    }, undefined);
    return result ? new ModelErrorDefinition(result) : undefined;
}