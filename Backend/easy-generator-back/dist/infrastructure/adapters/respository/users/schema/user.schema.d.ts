import { Schema } from 'mongoose';
declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
    createAt: Date;
    email?: string;
    password?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    createAt: Date;
    email?: string;
    password?: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    createAt: Date;
    email?: string;
    password?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export default UserSchema;
