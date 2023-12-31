import Validator from "./Validators/Validator";
import {ModelErrorDefinition} from "../model/ModelErrorDefinition";
import {ValidationKeys} from "./constants";
import {IRegistry} from "../utils/registry";
import {ValidatorRegistry} from "./ValidatorRegistry";

/**
 * @typedef Errors
 * @memberOf Validation
 */
export type Errors = string | undefined;

/**
 * @interface ValidatorRegistry
 */
export interface IValidatorRegistry<T extends Validator> extends IRegistry<T>{
    /**
     * @return {string[]} the registered validators keys
     * @memberOf IValidatorRegistry
     */
    getKeys(): string[];

    /**
     * Registers the provided validators onto the registry
     *
     * @typedef T extends Validator
     * @param {T[] | ValidatorDefinition[]} validator
     * @memberOf IValidatorRegistry
     */
    register<T extends Validator>(...validator: (T | ValidatorDefinition)[]) : void;

    /**
     * @typedef T extends Validator
     * @param {string} key one of the {@link ValidationKeys}
     * @return {Validator | undefined} the registered Validator or undefined if there is nono matching the provided key
     * @memberOf IValidatorRegistry
     */
    get<T extends Validator>(key: string): T | undefined;
}

/**
 * @typedef ValidatorDefinition
 * @memberOf Validation
 */
export type ValidatorDefinition = {
    validator: {new(): Validator},
    validationKey: string
}

/**
 * @interface Validatable
 */
export default interface Validatable {
    /**
     * @param {any} [args]
     * @memberOf Validatable
     */
    hasErrors(...args: any[]) : ModelErrorDefinition | undefined;
}

/**
 * @typedef ValidationPropertyDecoratorDefinition
 * @memberOf Validation
 */
export type ValidationPropertyDecoratorDefinition = {
    prop: string | symbol,
    decorators: ValidationDecoratorDefinition[]
}

/**
 * @typedef ValidationDecoratorDefinition
 * @memberOf Validation
 */
export type ValidationDecoratorDefinition = {
    key: string,
    props: ValidationElementDefinition
}

/**
 * @typedef ValidationElementDefinition
 * @memberOf Validation
 */
export type ValidationElementDefinition = {
    value?: string | number,
    message: string
    types?: string[],
}

/**
 * @typedef ModelErrors
 * @memberOf Validation
 */
export type ModelErrors = {
    [indexer: string]: {[indexer: string]: Errors, }
}
