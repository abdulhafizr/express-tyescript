import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    photo: String,
}, {timestamps: {createdAt: 'createdAt'}})

export default mongoose.model('User', userSchema);
