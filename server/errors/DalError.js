import ExtendableError from './ExtendableError';

/**
 * Data access layer error.
 */
class DalError extends ExtendableError {
    constructor (message, extra) {
        super(message);
        this.extra = extra;
    }
}

export default DalError;
