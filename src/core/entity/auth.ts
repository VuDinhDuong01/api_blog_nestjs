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

    @Column({  default: '', nullable: true })
    address: string

    @Column({  default: '', nullable: true })
    avatar: string

    @Column({  default: '', nullable: true })
    phoneNumber: string

    @Column({  default: '', nullable: true })
    token: string

    @Column({  default: '', nullable: true })
    token_expired: string

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