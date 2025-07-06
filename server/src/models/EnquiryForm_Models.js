import mongoose from "mongoose";

const enquiryFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    checkbox: {
        type: Boolean
    },
    section: {
        type: String
    }
});

const EnquiryFormModel = mongoose.model("EnquiryForm" , enquiryFormSchema);

export default EnquiryFormModel;