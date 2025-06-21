import mongoose, { model, Schema } from "mongoose";


const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    profilePicture: { type: String }, 
}, { timestamps: true });

export const userModel = model("User", UserSchema);
