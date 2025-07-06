import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Testi = mongoose.model("Testi" , testimonialSchema);

export default Testi;