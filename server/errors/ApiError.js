import ExtendableError from './ExtendableError';

/**
 * API error
 */
class ApiError extends ExtendableError {
    constructor (message, extra) {
        super(message);
        this.extra = extra;
    }
}

export default ApiError;

