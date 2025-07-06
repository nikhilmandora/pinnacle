import mongoose from "mongoose";

const keyHighlightSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const KeyHighlightModel = mongoose.model("KeyHighlight" , keyHighlightSchema);

export default KeyHighlightModel;