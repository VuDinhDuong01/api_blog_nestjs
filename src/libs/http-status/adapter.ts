/* eslint-disable prettier/prettier */
export abstract class  HttpStatusAdapter{
    abstract CREATED : number
    abstract BAD_REQUEST : number
    abstract UNAUTHORIZED : number
    abstract FORBIDDEN : number
    abstract NOT_FOUND: number
    abstract CONFLICT : number
}