/* eslint-disable prettier/prettier */
import { BaseEntity } from "src/utils/base-entity"
import { Entity, Column } from "typeorm"

@Entity()
export class Menu extends BaseEntity {

    @Column({
        default:'',
        nullable:false
    })
    title: string

    @Column({default:''})
    description: string

    @Column({ type:'simple-array', nullable: true, default:[]})
    images: string[]
}