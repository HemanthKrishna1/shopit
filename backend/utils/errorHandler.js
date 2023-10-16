class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); // constructor of the super class(Error class)
    this.statusCode = statusCode;

    // Create stack property
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
