/* eslint-disable prettier/prettier */
import {ConfigService } from "@nestjs/config";
import { SecretAdapter } from "src/libs/secret/adapter";


export class SecretService implements SecretAdapter{
    
    constructor(private readonly config: ConfigService){}
    MINIO_ENDPOINT: string;
    MINIO_PORT: string;
    MINIO_ACCESS_KEY: string;
    MINIO_SECRET_KEY: string;
    MINIO_USE_SSL: string;
    MINIO_BUCKET_NAME: string;
    EXPIRES_IN_ACCESS_TOKEN: string;
    EXPIRES_IN_REFRESH_TOKEN: string;
    MAIL_HOST = this.config.get<string>('MAIL_HOST');
    MAIL_USER= this.config.get<string>('MAIL_USER');
    MAIL_PASSWORD= this.config.get<string>('MAIL_PASSWORD');
    MAIL_FROM = this.config.get<string>("MAIL_FROM");

    PORT= this.config.get<string>('PORT'); ;
    PASSWORD_POSTGRES= this.config.get<string>('PASSWORD_POSTGRES');
    NAME_POSTGRES= this.config.get<string>('NAME_POSTGRES');
    KEY_ACCESS_TOKEN = this.config.get<string>('KEY_ACCESS_TOKEN');
    KEY_REFRESH_TOKEN = this.config.get<string>('KEY_REFRESH_TOKEN');

}