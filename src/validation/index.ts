/**
 * @namespace Validation
 */

export * as Decorators from './decorators';
export * from './decorators';
export * from './types';
export * from './validation';
export * from './constants';
export * as Validators from './Validators';
export * from './Validators';
import {ValidatorRegistry} from './ValidatorRegistry';

/**
 * @constant ValidatorRegistryImp
 * @memberOf Validation
 */
export const ValidatorRegistryImp = ValidatorRegistry;
