export default class ApiError extends Error {
  status: number;
  detail?: string[];
  constructor(statusCode: number = 500, msg?: string, detail?: string[]) {
    super(msg);
    this.detail = detail;
    this.status = statusCode;
  }
}
