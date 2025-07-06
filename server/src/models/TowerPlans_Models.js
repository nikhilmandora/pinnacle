import mongoose from "mongoose";

const towerPlansSchema = new mongoose.Schema({
    button: {
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

const TowerPlansModel = mongoose.model("towerPlans" , towerPlansSchema);

export default TowerPlansModel;