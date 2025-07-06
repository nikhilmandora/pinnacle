import mongoose from "mongoose";

const sitePlanSchema = new mongoose.Schema({
    entry: String,
    status: {
        type: Boolean,
        default: true
    }
})

const SitePlanModel = mongoose.model("sitePlan" , sitePlanSchema)

export default SitePlanModel;