/* eslint-disable prettier/prettier */
import { BaseEntity } from "src/utils/base-entity"
import { Entity, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @Column({  default: '', nullable: false, length: 50 })
    username: string

    @Column({  default: '', nullable: false })
    password: string

    @Column({  default: '', nullable: false, unique: true })
    email: string

    @Column({  default: '' })
    address: string

    @Column({  default: '' })
    avatar: string

    @Column({  default: '' })
    phoneNumber: string

    @Column({  default: '' })
    token: string


    @Column({ default: 0, type: 'int' })
    verify: number

    @Column({
        type: 'enum',
        array: true,
        default: ['USER'],
        enum: ['USER', 'ADMIN', 'CUSTOMER']
    })
    role: string[]
}