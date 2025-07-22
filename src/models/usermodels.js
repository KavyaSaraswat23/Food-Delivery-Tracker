import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Your Email"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Please Provide Your PhoneNumber"],
        unique: true,
    },
    address: {
        type: String,
        required: [true, "Please provide Address"],
    },
    coordinates: {
        lat: {
            type: Number,
            required: false,
        },
        lng: {
            type: Number,
            required: false,
        },
    },
    password: {
        type: String,
        required: [true, "Enter valid password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;