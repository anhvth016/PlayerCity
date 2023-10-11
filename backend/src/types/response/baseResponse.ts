export interface BaseResponse<T> {
    data: T;
}

export const baseResp = (payload: unknown): BaseResponse<typeof payload> => {
    return {
        data: payload
    };
};

export default BaseResponse;
