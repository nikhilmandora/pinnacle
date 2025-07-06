import mongoose from "mongoose";

const nearBySchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

const NearByModel = mongoose.model("NearBy" , nearBySchema)

export default NearByModel;