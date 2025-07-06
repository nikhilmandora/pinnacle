import mongoose from "mongoose";

const priceHeaderSchema = new mongoose.Schema({
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

const PriceHModel = mongoose.model("priceHeader" , priceHeaderSchema);

export default PriceHModel;