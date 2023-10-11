export default class ApiError extends Error {
    status;
    detail;
    constructor(statusCode = 500, msg, detail) {
        super(msg);
        this.detail = detail;
        this.status = statusCode;
    }
}
//# sourceMappingURL=apiError.js.map