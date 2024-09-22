/* eslint-disable prettier/prettier */
import { ApiQueryOptions, ApiResponseOptions } from "@nestjs/swagger";

interface ResponseError {
    route?: string
    status: number
    message?: string
    description?: string
}

export const swagger = {
    defaultResponse: ({ example, description = '', status }: ApiQueryOptions & ApiResponseOptions) => ({
        status: status,
        description: description,
        schema: {
            example: example ? example : undefined
        }
    }),
    defaultRequestBody: ({ example, description = '' }: ApiQueryOptions & ApiResponseOptions) => ({
        description: description,
        schema: {
            example: example ? example : undefined
        }
    }),
    defaultRequestQuery: ({ example, description = '' }: ApiQueryOptions & ApiResponseOptions) => ({
        description: description,
        schema: {
            example: example ? example : undefined
        }
    }),
    defaultRequestParam:(swaggerInput:{example: any, name: string , in:string}) => ({
        schema: {
            example: swaggerInput.example ? swaggerInput.example : undefined
        },
        name:swaggerInput.name,
        in:swaggerInput.in
    }),
    defaultResponseError: ({ route, status, message, description }: ResponseError) => ({
        description: description,
        status,
        message,
        route
    })
}