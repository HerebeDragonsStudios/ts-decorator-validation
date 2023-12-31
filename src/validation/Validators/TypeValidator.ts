import Validator from "./Validator";
import {DEFAULT_ERROR_MESSAGES} from "../constants";
import {Errors} from "../types";
import {ModelKeys} from "../../model";
import {evaluateDesignTypes} from "../../utils";

/**
 * Required Validator
 *
 * @class RequiredValidator
 * @extends Validator
 *
 * @memberOf Validators
 */
export default class TypeValidator extends Validator {
    constructor(message: string = DEFAULT_ERROR_MESSAGES.TYPE){
        super(ModelKeys.TYPE, message);
    }

    /**
     *
     * @param {string} value
     * @param {string | string[] | {name: string}} types
     * @param {string} [message]
     *
     * @return Errors
     *
     * @memberOf StepValidator
     * @override
     *
     * @see Validator#hasErrors
     */
    public hasErrors(value: any, types: string | string[] | {name: string}, message?: string): Errors {
        if (value === undefined)
            return; // Dont try and enforce type if undefined
        if (!evaluateDesignTypes(value, types))
            return this.getMessage(message || this.message,
                typeof types === 'string'
                    ? types
                    : (
                        Array.isArray(types)
                            ? types.join(', ')
                            : types.name), typeof value);
    }
}