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

    abstract EXPIRES_IN_ACCESS_TOKEN: string
    abstract EXPIRES_IN_REFRESH_TOKEN: string

    abstract MINIO_ENDPOINT: string
    abstract MINIO_PORT: string

    abstract MINIO_ACCESS_KEY: string
    abstract MINIO_SECRET_KEY: string
    abstract MINIO_USE_SSL: string
    abstract MINIO_BUCKET_NAME: string
}
