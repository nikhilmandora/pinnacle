import GHModel from "../models/GalleryHeader_Model.js";

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryHCreate = async (req , res) => {

    try {

        const { heading , subHeading } = req?.body

        if(!heading) {
            return res.status(422).json({
                status: false,
                message: "Heading Required"
            })
        }

        const addData = await GHModel.create({
            heading,
            subHeading
        })

        return res.json({
            status: true,
            message: "Data Added",
            data: addData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const galleryHRead = async (req , res) => {

    try {

        const readData = await GHModel.findOne({});

        if(!readData) {
            return res.status(422).json({
                status: true,
                message: "Can't Find Data"
            })
        }

        readData.image = process.env.IMAGEBASEURL+"galleryHeader/" + readData.image;

        return res.json({
            status: true,
            message: "Data Found",
            data: readData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "galleryHeader" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
        //   console.error('Error Deleting File:', err);
        } else {
        //   console.log('File Deleted Successfully');
        }
    });
};

const galleryHUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading , subHeading } = req?.body

        const updateData = {
            heading,
            subHeading
        }

        const updateDataId = await GHModel.findById({ _id })

        if(!updateDataId){
            return res.status(422).json({
                status: false,
                message: "Can't Find and Update"
            })
        }

        if(req?.file?.filename){
            if(updateDataId.image){
                deleteFile(updateDataId.image)
            }
            updateData.image = req?.file?.filename
        }

        await updateDataId.updateOne(updateData);

        return res.json({
            status: true,
            message: "Data Updated",
            data: updateDataId
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { galleryHCreate , galleryHRead , galleryHUpdate }