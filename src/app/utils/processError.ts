import { AxiosError } from "axios";

class CustomError extends Error {
  status?: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export function processError(e: unknown) {
  const error = e as AxiosError<{ message?: string; data?: string }>;
  const responseData = error.response?.data;
  const errorMessage =
    responseData?.message ?? responseData?.data ?? error.message;

  const errorWithStatus = new CustomError(errorMessage);
  errorWithStatus.status = error.response?.status;

  throw errorWithStatus;
}
