import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default UserSchema;
