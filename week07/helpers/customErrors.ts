export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    message: string;
    field?: string;
  };
}

export class RequestValidationError extends CustomError {
  statusCode = 400;
  params: string | undefined;
  constructor(message: string, params?: string, statusCode?: number) {
    super(message);
    this.params = params;
    this.statusCode = statusCode ? statusCode : this.statusCode;

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      field: this.params,
    };
  }
}

export class UnauthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super('');

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return {
      message: 'Unauthorized',
    };
  }
}

export class InvalidTokenError extends CustomError {
  statusCode = 403;
  constructor() {
    super('');

    Object.setPrototypeOf(this, InvalidTokenError.prototype);
  }

  serializeErrors() {
    return {
      message: 'Forbidden Error',
    };
  }
}
