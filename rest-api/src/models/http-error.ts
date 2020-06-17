class HttpError extends Error {
  public data: any;

  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export default HttpError;
