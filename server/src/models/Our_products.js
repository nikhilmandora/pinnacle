import mongoose from "mongoose";

const ourProductsSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const OurProduct = mongoose.model("OurProduct" , ourProductsSchema);

export default OurProduct;