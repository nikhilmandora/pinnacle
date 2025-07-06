import mongoose from "mongoose";

const amenitiesAlbumSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

const AmenAlbumModel = mongoose.model("amenitiesAlbum" , amenitiesAlbumSchema)

export default AmenAlbumModel;