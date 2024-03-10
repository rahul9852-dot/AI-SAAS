
import {models, Schema, Document, model} from "mongoose";

export interface User extends Document {
  clerkId: string;
  email: string;
  userName: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId?: number;
  creditBalance?: number;
}


const UserSchema = new Schema({
  clerkId: {type: String, required: true, unique:true},
  email:{type: String, reuired: true, unique: true},
  userName: {type: String, required: true, unique: true},
  photo: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String,},
  palnId: {type: Number, default:1},
  creditBalance:{type: Number, default: 10}
});


const User = models?.User || model('User', UserSchema);
export default User;