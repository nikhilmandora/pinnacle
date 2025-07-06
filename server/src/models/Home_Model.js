import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    homeSize: {
        type: String,
        required: true
    },
    broker: {
        type: String,
        required: true
    },
    hearAboutUs: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    }
}, {timestamps: true})

const FormHome = mongoose.model( "form" , formSchema );

export default FormHome;