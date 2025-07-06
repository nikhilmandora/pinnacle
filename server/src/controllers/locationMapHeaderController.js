import LMHeaderModel from "../models/LocationMapHeader_Model.js"

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LMHCreate = async (req , res) => {

    try {

        const { heading , subHeading } = req?.body

        if(!heading) {
            return res.status(422).json({
                status: false,
                message: "Heading Required"
            })
        }

        const dataAdd = await LMHeaderModel.create({
            heading,
            subHeading
        })

        return res.json({
            status: true,
            message: "Data Added",
            data: dataAdd
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const LMHRead = async (req , res) => {

    try {

        const dataRead = await LMHeaderModel.findOne({})

        if(!dataRead) {
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        dataRead.image = process.env.IMAGEBASEURL+"locationMapHeader/" + dataRead.image

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

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "locationMapHeader" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
        //   console.error('Error Deleting File:', err);
        } else {
        //   console.log('File Deleted Successfully');
        }
    });
};

const LMHUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading , subHeading } = req?.body

        const dataUpdate = {
            heading,
            subHeading
        }

        const dataUpdateId = await LMHeaderModel.findById({ _id })

        if(req?.file?.filename) {
            if(dataUpdateId.image){
                deleteFile(dataUpdateId.image)
            }
            dataUpdate.image = req?.file?.filename
        }

        await dataUpdateId.updateOne(dataUpdate)

        if(!dataUpdateId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find and Update"
            })
        }

        return res.json({
            status: true,
            message: "Data Found and Update",
            data: dataUpdateId
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { LMHCreate , LMHRead , LMHUpdate }