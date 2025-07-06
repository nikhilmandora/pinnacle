import EnquiryFormModel from "../models/EnquiryForm_Models.js";

const enquiryFormCreate = async (req , res) => {

    try {

        const { name , number , email , checkbox , section } = req?.body

        if( !name || !number || !email || !checkbox ) {
            return res.status(422).json({
                status: false,
                message: "Feilds are Empty"
            })
        }

        const enquiryCreate = await EnquiryFormModel.create({
            name,
            number,
            email,
            checkbox,
            section
        })

        return res.json({
            status: true,
            message: "Data Created",
            data: enquiryCreate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

};

const enquiryFormRead = async (req , res) => {

    try {

        const enquiryRead = await EnquiryFormModel.find({})

        if(!enquiryRead) {
            return res.status(422).json({
                status: false,
                message: "Enquiry Data Not Found"
            })
        }

        return res.json({
            status: true,
            message: "Data Found",
            data: enquiryRead
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

};

const enquiryFormDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const enquiryDeleteId = await EnquiryFormModel.findByIdAndDelete({ _id })

        if(!enquiryDeleteId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID for Delete"
            })
        }

        return res.json({
            status: true,
            message: "Data Deleted",
            data: enquiryDeleteId
        })
        
        

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

};

export default { enquiryFormCreate , enquiryFormRead , enquiryFormDelete };