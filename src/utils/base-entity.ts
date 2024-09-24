/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate } from "typeorm"

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    public updatedAt: Date | null; 

    @BeforeUpdate()
    updateTimestamp() {
        this.updatedAt = new Date(); 
    }

    @Column({
        default: ''
    })
    createdBy: string

    @Column({
        default: ''
    })
    updatedBy: string
}