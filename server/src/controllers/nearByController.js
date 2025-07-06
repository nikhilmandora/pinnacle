import NearByModel from "../models/NearBy_Model.js";

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nearByCreate = async (req , res) => {

    try {

        const { heading , km } = req?.body

        if(!heading , !km) {
            return res.status(422).json({
                status: false,
                message: "Flieds are Empty"
            });
        }

        const nearByData = {
            heading,
            km
        }

        if(req?.file?.filename) {
            nearByData.image = req?.file?.filename
        }

        await NearByModel.create(nearByData);

        return res.json({
            status:true,
            message: "Data Added Successfully",
            data: nearByData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message 
        })
    }

}

const nearByRead = async (req , res) => {
    
    try {

        const { status } = req?.query

        let where = {} 

        if(status){
            where = {status: status}
        }

        const nearByData = await NearByModel.find(where)

        if(!nearByData) {
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        return res.json({
            status: true,
            message: "Data Found",
            data: nearByData
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "nearby" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
            // console.error('Error Deleting File:', err);
        } else {
            // console.log('File Deleted Successfully');
        }
    });
}

const nearByDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const nearByData = await NearByModel.findByIdAndDelete({ _id });

        if(!nearByData){
            return res.status(422).json({
                status: false,
                message: "Can't Find and Delete"
            });
        }

        if(nearByData.image){
            deleteFile(nearByData.image);
        }

        return res.json({
            status: true,
            message: "Data Deleted Successfully",
            data: nearByData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const nearByupdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading , km } = req?.body

        const nearById = await NearByModel.findById({_id});

        const nearByData = {
            heading,
            km
        }

        if(req?.file?.filename){
            if(nearById.image){
                deleteFile(nearById.image);
            }
            nearByData.image = req?.file?.filename;
        }

        if(!nearById) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID"
            })
        }

        await nearById.updateOne(nearByData);

        return res.json({
            status: true,
            message: "Data Updated Successfully",
            data: nearById
        });

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const nearByUpdateStatus = async (req , res) => {

    try {

        const { _id } = req?.params

        const { status } = req?.body

        const nearById = await NearByModel.findById({_id});

        if(!nearById) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID"
            })
        }

        await nearById.updateOne({status});

        return res.json({
            status: true,
            message: "Status Updated",
            data: nearById
        });

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

export default { nearByCreate , nearByRead , nearByDelete , nearByupdate , nearByUpdateStatus };