export const  exampleUserRequest={
    register:{
        username:'ngoc dương',
        password:"123456aA@",
        email:'duong2lophot@gmail.com'
    },
    login:{
        password:"123456aA@",
        email:'duong2lophot@gmail.com'
    }
}

export const exampleUserResponse={
    register:{
        data:{
            id:'adfadfadfadfadfadfadf'
        },
        message:'register success'
    },
    login:{
        data:{
            token:{
                access_token:'',
                refresh_token:'',
            },
            user:{
                id:'',
                email:'',
                password:''
            }

        },
        message:'login success'
    }
}

