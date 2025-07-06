import FaqS from "../models/Faq_model.js";

const faq_create = async (req , res) => {

    try{

        const { ques , ans } = req?.body;

        if(!ques , !ans) {
            return res.status(422).json({
                status: false,
                message: "Ques and Ans is not Mention"
            })
        }

        const quesAns = await FaqS.create({
            ques,
            ans
        })

        if( ques , ans ) {
            return res.json({
                status: true,
                message: "Ques and Ans Added Succesfully",
                data: quesAns
            });
        }

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const faq_read = async (req , res) => {

    try {

        const { status } = req?.query

        let where = {}

        if(status) {
            where = { status: status }   
        }

        const faqRead = await FaqS.find(where)

        if(!faqRead.length) {
            return res.json({
                status: false,
                message: "No FAQ Found"
            });
        }

        return res.json({
            status: true,
            message: "Faqs are here",
            data: faqRead
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const faq_delete = async (req , res) => {

    try {

        const { _id } = req?.params

        const faqDelete = await FaqS.findByIdAndDelete({ _id });

        if(!faqDelete) {
            return res.status(422).json({
                status: false,
                message: "Can't Find FAQ"
            })
        }

        return res.json({
            status: true,
            message: "FAQ Delete Succesfully",
            data: faqDelete
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            messgae: error.message
        })
    }

}

const faq_update = async (req , res) => {

    try {

        const { _id } = req?.params

        const { ques , ans } = req?.body

        const faqUpdateId = await FaqS.findById({ _id });

        if(!faqUpdateId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find FAQ for Update"
            })
        }

        const faqUpdate = await faqUpdateId.updateOne({ ques , ans });

        if(!faqUpdate) {
            return res.status(422).json({
                status: false,
                message: "Can't Update FAQ"
            })
        }

        return res.json({
            status:true,
            message: "FAQ Updated",
            data: faqUpdate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const faq_update_status = async (req , res) => {

    try {
        
        const { _id } = req?.params

        const { status } = req?.body

        const faqUpdateId = await FaqS.findById({ _id });

        if(!faqUpdateId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find FAQ ID for Update Status"
            })
        }

        const faqUpdate = await faqUpdateId.updateOne({ status });

        if(!faqUpdate) {
            return res.status(422).json({
                status: false,
                message: "Can't Update FAQ Status"
            })
        }

        return res.json({
            status:true,
            message: "FAQ Status Updated",
            data: faqUpdate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { faq_create , faq_read , faq_delete , faq_update , faq_update_status }