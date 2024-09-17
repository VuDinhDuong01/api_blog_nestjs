import {ConfigService } from "@nestjs/config";
import { SecretAdapter } from "src/libs/secret/adapter";


export class SecretService implements SecretAdapter{
    
    constructor(private readonly config: ConfigService){}

    PORT= this.config.get<string>('PORT'); ;
    PASSWORD_POSTGRES= this.config.get<string>('PASSWORD_POSTGRES');
    NAME_POSTGRES= this.config.get<string>('NAME_POSTGRES');
    KEY_ACCESS_TOKEN = this.config.get<string>('KEY_ACCESS_TOKEN');
    KEY_REFRESH_TOKEN = this.config.get<string>('KEY_REFRESH_TOKEN');

}