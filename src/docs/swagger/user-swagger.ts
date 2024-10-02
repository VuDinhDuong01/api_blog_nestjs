/* eslint-disable prettier/prettier */
import { swagger } from "src/docs/base-swagger"
import { exampleUserRequest, exampleUserResponse } from "../data/user"

export const userResponseSwagger={
    login:{
        200:swagger.defaultResponse({example:exampleUserResponse.login,status:200, description:'login created'}),
        // 400:()=>swagger.defaultResponseError({}),
        // 500:()=>swagger.defaultResponseError({})
    },
    register:{
        200:swagger.defaultResponse({example:exampleUserResponse.register,status:200,description:'register created'}),
        // 400:()=>swagger.defaultResponseError({}),
        // 500:()=>swagger.defaultResponseError({})
    },
    verifyEmail:{
        200: swagger.defaultResponse({example:exampleUserResponse.verifyEmail, status:200})
    },
    forgotPass:{
        200: swagger.defaultResponse({example:exampleUserResponse.forgotPass, status:200})
    },
    resetPass:{
        200: swagger.defaultResponse({example: exampleUserResponse.resetPass,status:200})
    },
    refreshToken:{
        200: swagger.defaultResponse({example: exampleUserResponse.refreshToken, status:200})
    },
    getMe:{
        200: swagger.defaultResponse({example: exampleUserResponse.getMe, status:200})
    },
    logout:{
        200: swagger.defaultResponse({example: exampleUserResponse.logout, status:200})
    },
    updateUser:{
        200: swagger.defaultResponse({example: exampleUserResponse.updateUser,status:200})
    },
    deleteUser:{
        200: swagger.defaultResponse({example: exampleUserResponse.deleteUser, status:200})
    },
    importUser:{
        200: swagger.defaultResponse({example:exampleUserResponse.importUser,status:200})
    }
}

export const userRequestSwagger= {
    login:swagger.defaultRequestBody({example:exampleUserRequest.login,description:'body login'}),
    register:swagger.defaultRequestBody({example:exampleUserRequest.register,description:'body request'}),
    verifyEmail: swagger.defaultRequestBody({example: exampleUserRequest.verifyEmail,description:'body verify email'}),
    forgotPass: swagger.defaultRequestBody({example:exampleUserRequest.forgotPass,description:'body forgot password'}),
    resetPass: swagger.defaultRequestBody({example: exampleUserRequest.resetPass,description:'body reset password'}),
    refreshToken: swagger.defaultRequestBody({example: exampleUserRequest.refreshToken, description:'body refresh token'}),
    logout: swagger.defaultRequestBody({example: exampleUserRequest.refreshToken, description:'body refresh token'}),
    updateUserBody: swagger.defaultRequestBody({example: exampleUserRequest.updateUserBody}),
    updateUserParams: swagger.defaultRequestParam({example:{id:'73908ee9-c29a-4a3b-918c-5457a7faa2f1'}, name:'id',in:'path'}),
    deleteManyUser: swagger.defaultRequestBody({example: exampleUserRequest.deleteManyUser, description:'body delete many user'}),
    importUser: swagger.defaultRequestBody({example:exampleUserRequest.importUser,description:'body import user'})
}