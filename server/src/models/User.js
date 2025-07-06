import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "customer"
    },
    number: {
        type: String
    },
    bio: {
        type: String
    },
    country: {
        type: String
    },
    cityandstate: {
        type: String
    },
    stdcode: {
        type: String
    },
    image: {
        type: String
    }    
}, {timestamps: true});

const User = mongoose.model("User" , userSchema);

export default User;