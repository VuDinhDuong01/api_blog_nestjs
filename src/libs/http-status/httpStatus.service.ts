/* eslint-disable prettier/prettier */
import { HttpStatusAdapter } from "./adapter";

export class HttpStatusService extends HttpStatusAdapter {
    CREATED=200
    BAD_REQUEST=400
    UNAUTHORIZED=401
    FORBIDDEN=403
    NOT_FOUND=404
    CONFLICT=409
}
