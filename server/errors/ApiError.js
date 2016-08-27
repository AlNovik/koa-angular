import ExtendableError from './ExtendableError';

/**
 * API error
 */
class ApiError extends ExtendableError {
    constructor (boom, extra) {
        super(boom.payload.message);
        this.boom = boom;
        this.extra = extra;
    }
}

export default ApiError;

