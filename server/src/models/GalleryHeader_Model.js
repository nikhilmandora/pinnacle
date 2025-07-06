import mongoose from "mongoose";

const galleryHeaderSchema = new mongoose.Schema({
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
});

const GHModel = mongoose.model("galleryHeader" , galleryHeaderSchema);

export default GHModel;