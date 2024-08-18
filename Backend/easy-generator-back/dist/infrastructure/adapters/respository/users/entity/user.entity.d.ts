import { Document } from 'mongoose';
export interface UserEntity extends Document {
    name: string;
    readonly email: string;
    readonly password: string;
    readonly createAt: string;
}
