/* eslint-disable prettier/prettier */
import { BaseEntity } from "src/utils/base-entity"
import { Entity, Column } from "typeorm"

@Entity()
export class RefreshToken extends BaseEntity {

    @Column({  default: '' })
    refresh_token: string 

}