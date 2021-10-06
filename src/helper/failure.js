const { FeathersError } = require('@feathersjs/errors');

class CustomError extends FeathersError {
    constructor(message, name, code) {
        super(message, name, code);
    }

    toJSON() {
        return {
            code: this.code,
            detail: this.message,
        }
    }
}

class NotFoundRequest extends CustomError {
    constructor(message) {
        super(message, 'not found request', 404);
    }
}

module.exports = {
    NotFoundRequest
}