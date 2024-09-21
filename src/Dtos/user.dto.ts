/* eslint-disable prettier/prettier */
import { Optional } from '@nestjs/common';
import {
    IsInt,
    IsEmail,
    IsString,
    MaxLength,
} from 'class-validator';
export class UserDTO {

    @Optional()
    id: string

    @IsString({
        message: 'user không được bỏ trống',
    })
    @MaxLength(255)
    username: string

    @IsString({
        message: 'email không được bỏ trống'
    })
    @MaxLength(255)
    @IsEmail({}, {
        message: 'email phải đúng định dạng'
    })
    email: string

    @IsString({
        message: 'password không được bỏ trống'
    })
    @MaxLength(255)
    password: string

    @Optional()
    @IsString()
    @MaxLength(255)
    address: string = ''

    @Optional()
    @IsString()
    avatar: string = ''

    @Optional()
    @IsString()
    phoneNumber: string=''

    @Optional()
    token: string = ''

    @Optional()
    @IsInt()
    verify: number = 0

    @Optional()
    @IsString({ each: true })
    role: string[] =['USER']

    @Optional()
    createdAt: Date

    @Optional()
    updatedAt: Date

    @Optional()
   
    createdBy: string

    @Optional()
  
    updatedBy: string

    @Optional()
    @IsString()
    refresh_token: string =''

}