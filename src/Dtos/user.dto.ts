import {
    IsInt,
    IsEmail,
    IsString,
    MaxLength,
    IsDate,
  } from 'class-validator';
export class UserDTO{
    @IsString()

    id: string 
    @IsString({
        message:'user không được bỏ trống',
    })
    @MaxLength(255)
    username: string 

    @IsString({
        message:'email không được bỏ trống'
    })
    @MaxLength(255)
    @IsEmail()
    email: string 

    @IsString({
        message:'password không được bỏ trống'
    })
    @MaxLength(255)
    password: string

    @IsString()
    @MaxLength(255)
    address: string 

    @IsString()
    avatar: string 

    @IsString()
    phoneNumber: string

    @IsString()
    token: string

    @IsString()
    token_expired: string

    @IsInt()
    verify: number

    @IsString({each: true})
    role: string[]

    @IsDate()
    createdAt:Date

    @IsDate()
    updatedAt:Date

    @IsString()
    createdBy: string 

    @IsString()
    updatedBy: string 

    @IsString()
    refresh_token: string 

}