import mongoose from "mongoose";

const plansHeaderSchema = new mongoose.Schema({
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

const PlansHModel = mongoose.model("plansHeader" , plansHeaderSchema);

export default PlansHModel;