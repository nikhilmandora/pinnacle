import AmenAlbumModel from "../models/AmenitiesAlbum_Models.js"

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const amenAlbumCreate = async (req , res) => {

    try {

        const { heading } = req?.body

        if(!heading){
            return res.status(422).json({
                status: false,
                message: "Fields are Empty"
            })
        }

        const dataCreate = {
            heading
        }

        if(req?.file?.filename){
            dataCreate.image = req?.file?.filename
        }

        await AmenAlbumModel.create(dataCreate)

        return res.json({
            status: true,
            message: "Data Added Successfully",
            data: dataCreate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const amenAlbumRead = async (req , res) => {

    try {

        const { status } = req?.query

        let where = {}

        if(status){
            where = {status: status}
        }

        const dataRead = await AmenAlbumModel.find(where);

        if(!dataRead){
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        const modifiedData = dataRead.map(item => {
            return {
                ...item.toObject(),
                image: item.image ? `${process.env.IMAGEBASEURL}amenitiesAlbum/${item.image}` : null
            };
        });

        return res.json({
            status: true,
            message: "Data Find Successfully",
            data: modifiedData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "amenitiesAlbum" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
            // console.error('Error Deleting File:', err);
        } else {
            // console.log('File Deleted Successfully');
        }
    });
}

const amenAlbumDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const dataDelete = await AmenAlbumModel.findByIdAndDelete({ _id });

        if(!dataDelete){
            return res.status(422).json({
                status: false,
                message: "Can't Find and Delete"
            })
        }

        if(dataDelete.image){
            deleteFile(dataDelete.image)
        }

        return res.json({
            status: true,
            message: "Data Deleted Successfully",
            data: dataDelete
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const amenAlbumUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading } = req?.body

        const dataUpdateId = await AmenAlbumModel.findById({ _id });

        const dataUpdate = {
            heading
        }

        if(!dataUpdateId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        if(req?.file?.filename){
            if(dataUpdateId.image){
                deleteFile(dataUpdateId.image)
            }
            dataUpdate.image = req?.file?.filename
        }

        await dataUpdateId.updateOne(dataUpdate);

        return res.json({
            status: true,
            message: "Data Updated Succesfully",
            data: dataUpdateId
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const amenAlbumUpdateStatus = async (req , res) => {

    try {

        const { _id } = req?.params

        const { status } = req?.body

        const dataUpdateId = await AmenAlbumModel.findById({ _id });

        if(!dataUpdateId) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID"
            })
        }

        await dataUpdateId.updateOne({status});

        return res.json({
            status: true,
            message: "Status Updated Succesfully",
            data: dataUpdateId
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { amenAlbumCreate , amenAlbumRead , amenAlbumDelete , amenAlbumUpdate , amenAlbumUpdateStatus }