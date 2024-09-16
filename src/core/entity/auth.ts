import { BaseEntity } from "src/utils/base-entity"
import { Entity, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @Column({ type: 'string', default: '', nullable: false, length: 50 })
    username: string

    @Column({ type: 'string', default: '', nullable: false })
    password: string

    @Column({ type: 'string', default: '', nullable: false, unique: true })
    email: string

    @Column({ type: 'string', default: '', nullable: true })
    address: string

    @Column({ type: 'string', default: '', nullable: true })
    avatar: string

    @Column({ type: 'string', default: '', nullable: true })
    phoneNumber: string

    @Column({ type: 'string', default: '', nullable: true })
    token: string

    @Column({ type: 'string', default: '', nullable: true })
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