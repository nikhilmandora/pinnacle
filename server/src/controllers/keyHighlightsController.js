import KeyHighlightModel from "../models/KeyHighlightsModel.js"

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyHighlightsCreate = async (req, res) => {

    try{

        const { heading , description } = req?.body

        if( !heading || !description || !req?.file ) {
            return res.status(422).json({
                status: false,
                message: "Flieds are Empty"
            })
        }

        const khDataCreate = {
            heading,
            description
        }

        if(req?.file?.filename) {
            khDataCreate.image = req?.file?.filename
        }

        await KeyHighlightModel.create(khDataCreate);

        return res.json({
            status: true,
            message: "Data Added Succesfully",
            data: khDataCreate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const keyHighlightsRead = async (req, res) => {

    try{

        const { status } = req?.query

        let where = {}

        if(status){
            where = {status: status}
        }

        const khGetRead = await KeyHighlightModel.find(where);

        if(!khGetRead) {
            return res.status(422).json({
                status: false,
                message: "Data Can't Found"
            });
        }

        khGetRead.image = process.env.IMAGEBASEURL+'keyHighlights/' + khGetRead.image;

        return res.json({
            status: true,
            message: "Data Found",
            data: khGetRead
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "keyHighlights" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
           console.error('Error Deleting File:', err);
        } else {
          console.log('File Deleted Successfully');
        }
    });
}

const keyHighlightsDelete = async (req, res) => {

    try{

        const { _id } = req?.params

        const khDeleteById = await KeyHighlightModel.findByIdAndDelete({ _id });

        if(!khDeleteById) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID and Delete"
            })
        }

        if(khDeleteById.image){
            deleteFile(khDeleteById.image)
        }

        return res.json({
            status: true,
            message: "Data Deleted Succesfully",
            data: khDeleteById
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const keyHighlightsUpdate = async (req, res) => {

    try{

        const { _id } = req?.params

        const { heading , description } = req?.body

        const khPutUpdateId = await KeyHighlightModel.findById({_id});

        const khPutUpdate = {
            heading,
            description
        }

        if(req?.file?.filename) {
            if(khPutUpdateId.image) {
                deleteFile(khPutUpdateId.image);
            }
            khPutUpdate.image = req?.file?.filename;
        }

        if(!khPutUpdateId){
            return res.status(422).json({
                status: false,
                message: "Can't Find and Update"
            })
        }

        await khPutUpdateId.updateOne(khPutUpdate);

        return res.json({
            status: true,
            message: "Data Updated Successfully",
            data: khPutUpdate
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const keyHighlightsUpdateStatus = async (req, res) => {

    try{

        const { _id } = req?.params

        const { status } = req?.body

        const khPutUpdateId = await KeyHighlightModel.findById({_id});

        if(!khPutUpdateId){
            return res.status(422).json({
                status: false,
                message: "Can't Find ID and Update Status"
            })
        }

        await khPutUpdateId.updateOne({status});

        return res.json({
            status: true,
            message: "Status Updated Successfully",
            data: khPutUpdateId
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

export default { keyHighlightsCreate , keyHighlightsRead , keyHighlightsDelete , keyHighlightsUpdate , keyHighlightsUpdateStatus }