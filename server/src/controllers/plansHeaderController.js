import PlansHModel from "../models/PlansHeader_Models.js"

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const plansCreate = async (req , res) => {

    try {

        const { heading , subHeading } = req?.body

        if(!heading){
            return res.status(422).json({
                status: false,
                message: "Heading Required"
            })
        }

        const dataCreate = await PlansHModel.create({
            heading,
            subHeading
        })

        return res.json({
            status: true,
            message: "Data Added",
            data: dataCreate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const plansRead = async (req , res) => {

    try {

        const dataRead = await PlansHModel.findOne({})

        if(!dataRead){
            return res.status(422).json({
                status: false,
                message: "No Data Found"
            })
        }

        dataRead.image = process.env.IMAGEBASEURL+"plansHeader/" + dataRead.image

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
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "plansHeader" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error Deleting File:', err);
        } else {
          console.log('File Deleted Successfully');
        }
    });
};

const plansUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading , subHeading } = req?.body

        if(!heading){
            return res.status(422).json({
                status : false,
                message: "Heading Required"
            })
        }

        const dataUpdate = {
            heading,
            subHeading
        }

        const dataUpdateId = await PlansHModel.findById({ _id });

        if(req?.file?.filename){
            if(dataUpdateId.image){
                deleteFile(dataUpdateId.image)
            }
            dataUpdate.image = req?.file?.filename
        }

        await dataUpdateId.updateOne(dataUpdate)

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

export default { plansCreate , plansRead , plansUpdate }