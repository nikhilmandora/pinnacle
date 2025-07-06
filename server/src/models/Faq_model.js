import mongoose from "mongoose"

const faqSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true
    }
})

const FaqS = mongoose.model("faq" , faqSchema);

export default FaqS;