/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MinioController } from "./minio.controller";
import { MinioService } from "./minio.service";

@Module({
    // imports: [TypeOrmModule.forFeature([User, RefreshToken])],
    providers: [MinioService],
    controllers: [MinioController],
    exports: [MinioService]
})

export class MinioModule{}