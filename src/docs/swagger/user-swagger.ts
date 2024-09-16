import { swagger } from "src/docs/base-swagger"
import { exampleUserRequest, exampleUserResponse } from "../data/user"

export const userResponsSwagger={
    login:{
        200:()=>swagger.defaultResponse({example:exampleUserResponse.login,status:200}),
        400:()=>swagger.defaultResponseError({}),
        500:()=>swagger.defaultResponseError({})
    },
    register:{
        200:()=>swagger.defaultResponse({example:exampleUserResponse.login,status:200}),
        400:()=>swagger.defaultResponseError({}),
        500:()=>swagger.defaultResponseError({})
    }
}

export const userRequestSwagger= {
    login:swagger.defaultRequestBody({example:exampleUserRequest.login,description:'body login'}),
    register:swagger.defaultRequestBody({example:exampleUserRequest.register,description:'body request'})
}