/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
  
  @Column()
  password: string 

  @Column({ default: true })
  isActive: boolean;

//   @OneToMany(type => Photo, photo => photo.user)
//   photos: Photo[];
}