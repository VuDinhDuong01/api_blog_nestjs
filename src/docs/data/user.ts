/* eslint-disable prettier/prettier */
import omit from 'lodash/omit'
import pick from 'lodash/pick'

const EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH = {
    id: '73908ee9-c29a-4a3b-918c-5457a7faa2f1',
    username: 'ngoc dương',
    password: "123456aA@",
    email: 'duong2lophot@gmail.com'
}
const EXAMPLE_PASS={
    newPass:"1234567",
    confirmPass:"1234567"
}

const REFRESH_TOKEN={
    refresh_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTA4ZWU5LWMyOWEtNGEzYi05MThjLTU0NTdhN2ZhYTJmMSIsInJvbGUiOlsiVVNFUiJdLCJpYXQiOjE3MjcwMTY1NzUsImV4cCI6MTcyNzEwMjk3NX0.MNu6cJ7rtDJFKhyXLy7Cn7TB50hfsvMiz5CBRqZdK-w'
}

export const exampleUserRequest = {
    register: omit(EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH, ['id']),
    login: omit(EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH, ['username', 'id']),
    verifyEmail: pick(EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH, ['email', 'id']),
    forgotPass: pick(EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH, ['email']),
    resetPass:Object.assign(pick(EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH,['email']),EXAMPLE_PASS),
    refreshToken:REFRESH_TOKEN,
    logout:REFRESH_TOKEN,
    updateUserBody:EXAMPLE_DEFAULT_OPTION_REQUEST_AUTH,
    deleteManyUser:['73908ee9-c29a-4a3b-918c-5457a7faa2f1','73908ee9-c29a-4a3b-918c-5457a7faa2f1'],
    importUser:{
        file:'string'
    }
}

export const exampleUserResponse = {
    register: {
        data: {
            id: '73908ee9-c29a-4a3b-918c-5457a7faa2f1'
        },
        message: 'register success'
    },
    login: {

        message: "login success",
        data: {
            id: "73908ee9-c29a-4a3b-918c-5457a7faa2f1",
            createdAt: "2024-09-22T09:21:11.105Z",
            updatedAt: "2024-09-22T09:21:44.118Z",
            createdBy: "",
            updatedBy: "",
            username: "ngọc dương",
            email: "duong2lophot@gmail.com",
            address: "",
            avatar: "",
            phoneNumber: "",
            role: [
                "USER"
            ]
        },
        token: {
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTA4ZWU5LWMyOWEtNGEzYi05MThjLTU0NTdhN2ZhYTJmMSIsInJvbGUiOlsiVVNFUiJdLCJpYXQiOjE3MjcwMTY1NzUsImV4cCI6MTcyNzEwMjk3NX0.MNu6cJ7rtDJFKhyXLy7Cn7TB50hfsvMiz5CBRqZdK-w",
            refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTA4ZWU5LWMyOWEtNGEzYi05MThjLTU0NTdhN2ZhYTJmMSIsInJvbGUiOlsiVVNFUiJdLCJpYXQiOjE3MjcwMTY1NzUsImV4cCI6MTcyNzYyMTM3NX0.CKEs-f1MYNk4nEgnXKr9wbMbH0usUZ5IxUSEQWrIKfI"
        }

    },
    verifyEmail: {
        message: 'verify email success'
    },
    forgotPass: {
        message: "forgot  password success",
        data: {
            email: "duong2lophot@gmail.com"
        }
    },
    resetPass:{
        message: 'reset password success',
        data: {}
    },
    refreshToken:{
        message: 'reset password success',
        token: {
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTA4ZWU5LWMyOWEtNGEzYi05MThjLTU0NTdhN2ZhYTJmMSIsInJvbGUiOlsiVVNFUiJdLCJpYXQiOjE3MjcwMTY1NzUsImV4cCI6MTcyNzEwMjk3NX0.MNu6cJ7rtDJFKhyXLy7Cn7TB50hfsvMiz5CBRqZdK-w",
            refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTA4ZWU5LWMyOWEtNGEzYi05MThjLTU0NTdhN2ZhYTJmMSIsInJvbGUiOlsiVVNFUiJdLCJpYXQiOjE3MjcwMTY1NzUsImV4cCI6MTcyNzYyMTM3NX0.CKEs-f1MYNk4nEgnXKr9wbMbH0usUZ5IxUSEQWrIKfI"
        }
    },
    getMe:{
        message: "login success",
        data: {
            id: "73908ee9-c29a-4a3b-918c-5457a7faa2f1",
            createdAt: "2024-09-22T09:21:11.105Z",
            updatedAt: "2024-09-22T09:21:44.118Z",
            createdBy: "",
            updatedBy: "",
            username: "ngọc dương",
            email: "duong2lophot@gmail.com",
            address: "",
            avatar: "",
            phoneNumber: "",
            role: [
                "USER"
            ]
        },
    },
    logout:{
        message: 'logout success',
        data: {}  
    },
    updateUser:{
        message:'update success',
        data:{
            id: "73908ee9-c29a-4a3b-918c-5457a7faa2f1",
            createdAt: "2024-09-22T09:21:11.105Z",
            updatedAt: "2024-09-22T09:21:44.118Z",
            createdBy: "",
            updatedBy: "",
            username: "ngọc dương",
            email: "duong2lophot@gmail.com",
            address: "",
            avatar: "",
            phoneNumber: "",
            role: [
                "USER"
            ]
        },
    },
    deleteUser:{
        message:'delete user success'
    },
    importUser:{
        message: "import user success",
        data: {
            successful: [
                {
                    username: "Vũ Đình Dương",
                    email: "duong3lophot@gmail.com",
                    password: "Password1234!2"
                }
            ],
            failed: [
                {
                    password: "Password1234!2",
                    errorField: [
                        "Email không được bỏ trống",
                        "Email đã tồn tại.",
                        "username không được bỏ trống"
                    ]
                }
            ]
        }
    }
}

