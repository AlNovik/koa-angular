import ExtendableError from './ExtendableError';

/**
 * API error
 */
class ApiError extends ExtendableError {
    constructor (message, extra) {
        super(typeof message === 'string' ? message : message.payload.message);
        if (typeof message === 'string') {
            this.extra = extra;
        } else {
            this.extra = message;
        }
    }
}

export default ApiError;

