import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    subHeading: {
        type: String,
        required: true
    },
    subSubHeading: {
        type: String,
        required: true
    },
    button: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    text: {
        type: String,
        required: true
    }
})

const Hero = mongoose.model("Hero" , heroSchema);

export default Hero;