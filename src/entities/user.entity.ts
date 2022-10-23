import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users_database')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 120, unique: true })
    email: string;

    @Column({ length: 150 })
    password: string;

    @Column()
    isActive: boolean;

    @Column()
    isAdm: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};