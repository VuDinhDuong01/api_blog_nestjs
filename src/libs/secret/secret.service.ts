/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { SecretAdapter } from './adapter';

@Injectable()
export class SecretService implements SecretAdapter {
    constructor(private readonly config: ConfigService) { }
 
    PORT = this.config.get<string>('PORT')

    PASSWORD_POSTGRES = this.config.get<string>('PASSWORD_POSTGRES')

    NAME_POSTGRES = this.config.get<string>('NAME_POSTGRES')

    KEY_ACCESS_TOKEN = this.config.get<string>('KEY_ACCESS_TOKEN')

    KEY_REFRESH_TOKEN = this.config.get<string>('KEY_REFRESH_TOKEN')

    MAIL_HOST = this.config.get<string>("MAIL_HOST")

    MAIL_USER = this.config.get<string>("MAIL_USER")

    MAIL_PASSWORD = this.config.get<string>("MAIL_PASSWORD")
    
    MAIL_FROM = this.config.get<string>("MAIL_FROM")
    EXPIRES_IN_ACCESS_TOKEN = this.config.get<string>("EXPIRES_IN_ACCESS_TOKEN")
   EXPIRES_IN_REFRESH_TOKEN= this.config.get<string>("EXPIRES_IN_REFRESH_TOKEN")
}
