import SitePlanModel from "../models/SitePlans_Models.js";

const sitePlanCreate = async (req , res) => {

    try {

        const { entry } = req?.body

        if(!entry) {
            return res.status(422).json({
                status: false,
                message: "Empty Field Can't be Proceed"
            })
        }

        const dataCreate = await SitePlanModel.create({entry})

        return res.json({
            status: true,
            message: "Data Added Succesfully",
            data: dataCreate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const sitePlanRead = async (req , res) => {

    try {

        const { status } = req?.query

        let where = {}

        if(status) {
            where = {status: status}
        }

        const dataRead = await SitePlanModel.find(where)

        if(!dataRead){
            return res.status(422).json({
                status: false,
                message: "Can't Found Data"
            })
        }

        return res.json({
            status: true,
            message: "Data Found",
            data: dataRead
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const sitePlanDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const dataDelete = await SitePlanModel.findByIdAndDelete({_id})

        if(!dataDelete){
            return res.status.json({
                status: false,
                message: "Can't Find ID and Delete"
            })
        }

        return res.json({
            status: true,
            message: "Data Delete Successfully",
            data: dataDelete
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const sitePlanUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { entry } = req?.body

        if(!entry) {
            return res.status(422).json({
                status: false,
                message: "Empty Field Can't be Proceed"
            })
        }

        const dataUpdate = await SitePlanModel.findByIdAndUpdate(_id , {entry} )

        if(!dataUpdate){
            return res.status(422).json({
                status: false,
                message: "Can't find ID and Update Data"
            })
        }

        return res.json({
            status: true,
            message: "Data Updated",
            data: dataUpdate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const sitePlanUpdateStatus = async (req , res) => {

    try {

        const { _id } = req?.params

        const { status } = req?.body

        const dataUpdate = await SitePlanModel.findByIdAndUpdate(_id , {status} )

        if(!dataUpdate){
            return res.status(422).json({
                status: false,
                message: "Can't find ID and Update Status"
            })
        }

        return res.json({
            status: true,
            message: "Status Updated",
            data: dataUpdate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { sitePlanCreate , sitePlanRead , sitePlanDelete , sitePlanUpdate , sitePlanUpdateStatus };