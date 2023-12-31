import {ValidationKeys, DEFAULT_ERROR_MESSAGES} from "../constants";
import {Errors} from "../types";
import PatternValidator from "./PatternValidator";


/**
 * URL Validator
 *
 * Pattern from {@link https://gist.github.com/dperini/729294}
 *
 * @class URLValidator
 * @extends PatternValidator
 *
 * @memberOf Validators
 */
export default class URLValidator extends PatternValidator {
    private static readonly urlPattern: RegExp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    constructor(message: string = DEFAULT_ERROR_MESSAGES.URL){
        super(ValidationKeys.URL, message)
    }

    /**
     *
     * @param {string} value
     * @param {string} [message]
     *
     * @return Errors
     *
     * @memberOf URLValidator
     * @override
     *
     * @see Validator#hasErrors
     */
    // @ts-ignore
    public hasErrors(value: string, message?: string): Errors {
        return super.hasErrors(value, URLValidator.urlPattern, message);
    }
}