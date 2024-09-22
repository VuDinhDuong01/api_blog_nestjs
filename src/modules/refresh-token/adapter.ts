/* eslint-disable prettier/prettier */
export abstract class IRefreshTokenAdapter {
    abstract execute(inputBody:{token: string }, inputRequest: any): Promise<{
        message: string,
        token: {
            access_token: string
            refresh_token: string
        }
    }>
}