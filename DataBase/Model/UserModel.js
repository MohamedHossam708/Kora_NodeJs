import { mongo } from "mongoose";



const Schema = mongo.Schema({
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
    profilePicture: { type: String, required: false },
}, { timestamps: true })


export const userModel = mongo.model("user", Schema);