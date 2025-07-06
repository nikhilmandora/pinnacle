import mongoose from "mongoose";

const locationMapHeaderSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    subHeading: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
})

const LMHeaderModel = mongoose.model("locationMapHeader" , locationMapHeaderSchema);

export default LMHeaderModel;