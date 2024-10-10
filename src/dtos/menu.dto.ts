/* eslint-disable prettier/prettier */

import { Optional } from '@nestjs/common';
import {
    IsNotEmpty,
    MaxLength,
} from 'class-validator';
export class MenuDTO {
    @IsNotEmpty({
        message: 'title không được bỏ trống', 
    })
    @MaxLength(255)
    title: string

    @IsNotEmpty({
        message: 'description không được bỏ trống'
    })
    @MaxLength(255)
    description: string

    @Optional()
    images: string[]
}

export interface IToken{
    id: string 
    role: string[],
    exp: number
    iat: number
}

