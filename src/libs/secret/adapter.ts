/* eslint-disable prettier/prettier */
export abstract class SecretAdapter {
    abstract PORT: string;

    abstract PASSWORD_POSTGRES: string;

    abstract NAME_POSTGRES: string;

    abstract KEY_ACCESS_TOKEN: string;

    abstract KEY_REFRESH_TOKEN: string;

    abstract MAIL_HOST: string;

    abstract MAIL_USER: string;

    abstract MAIL_PASSWORD: string;

    abstract MAIL_FROM: string;
}
