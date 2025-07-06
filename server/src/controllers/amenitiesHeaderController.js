import AmenitieHModel from "../models/AmenitiesHeader_Models.js";

import path from "path";
import fs, { stat }  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const amenitiesHCreate = async (req , res) => {

    try {

        const { heading , first , second , third } = req?.body

        if( !heading || !first || !second || !third ) {
            return res.status(422).json({
                status: false,
                message: "Empty Inputs Can't Proceed"
            })
        }

        const addData = await AmenitieHModel.create({
            heading,
            first,
            second,
            third
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

const amenitiesHRead = async (req , res) => {

    try {

        const readData = await AmenitieHModel.findOne({});

        if(!readData){
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        readData.image = process.env.IMAGEBASEURL+"amenitiesHeader/" + readData.image;

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
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "amenitiesHeader" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error Deleting File:', err);
        } else {
          console.log('File Deleted Successfully');
        }
    });
};

const amenitiesHUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { heading , first , second , third } = req?.body

        const updateData = {
            heading,
            first,
            second,
            third
        }

        const updateDataId = await AmenitieHModel.findById({ _id })

        if(!updateDataId){
            return res.status(422).json({
                status: false,
                message: "Can't Find ID and Update"
            })
        }

        if(req?.file?.filename){
            if(updateDataId?.image){
                deleteFile(updateDataId?.image)
            }
            updateData.image = req?.file?.filename
        }

        await updateDataId.updateOne( updateData );

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

export default { amenitiesHCreate , amenitiesHRead , amenitiesHUpdate }