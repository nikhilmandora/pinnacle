import mongoose from "mongoose";

const priceListSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    companyPrice: {
        type: String,
        required: true
    },
    ourPrice: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const PriceListModel = mongoose.model("priceList" , priceListSchema)

export default PriceListModel;