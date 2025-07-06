import mongoose from "mongoose";

const amenitiesHeaderSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    first: {
        number: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    second: {
        number: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    third: {
        number: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
})

const AmenitieHModel = mongoose.model("amenitiesHeader" , amenitiesHeaderSchema)

export default AmenitieHModel;