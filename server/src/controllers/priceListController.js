import PriceListModel from "../models/PriceList_Models.js"

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataCreate = async (req , res) => {

    try{

        const { heading , area , description , companyPrice , ourPrice } = req?.body

        if(!heading || !area || !description || !companyPrice || !ourPrice){
            return res.status(422).json({
                status: false,
                message: "Flieds are Empty"
            })
        }

        const dataCreate = {
            heading,
            area,
            description,
            companyPrice,
            ourPrice
        }

        if(req?.file?.filename){
            dataCreate.image = req?.file?.filename
        }

        await PriceListModel.create(dataCreate);

        return res.json({
            status: true,
            message: "Data Added",
            data: dataCreate
        })

    } catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const dataRead = async (req , res) => {

    try{

        const { status } = req?.query

        let where = {}

        if(status) {
            where = {status: status}
        }

        const dataRead = await PriceListModel.find(where)

        if(!dataRead){
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        const updatedData = dataRead.map(item => {
            return {
                ...item._doc,
                image: process.env.IMAGEBASEURL + "priceList/" + item.image
            };
        });

        return res.json({
            status: true,
            message: "Data Found",
            data: updatedData
        })

    } catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "priceList" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error Deleting File:', err);
        } else {
            console.log('File Deleted Successfully');
        }
    });
}

const dataDelete = async (req , res) => {

    try{

        const { _id } = req?.params

        const dataDelete = await PriceListModel.findByIdAndDelete({ _id })

        if(!dataDelete){
            return res.status(422).json({
                status: false,
                message: "Can't Find ID and Delete"
            })
        }

        if(dataDelete.image){
            deleteFile(dataDelete.image)
        }

        return res.json({
            status: true,
            message: "Data Deleted",
            data: dataDelete
        })

    } catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const dataUpdate = async (req , res) => {

    try{

        const { _id } = req?.params

        const { heading , area , description , companyPrice , ourPrice } = req?.body

        if(!heading || !area || !description || !companyPrice || !ourPrice){
            return res.status(422).json({
                status: false,
                message: "Feilds are Empty"
            })
        }

        const dataUpdate = {
            heading, 
            area, 
            description, 
            companyPrice, 
            ourPrice
        }

        const dataUpdateId = await PriceListModel.findById({ _id })

        if(!dataUpdateId){
            return res.status(422).json({
                status: false,
                message: "Can't Find Data for Update"
            })
        }

        if(req?.file?.filename){
            if(dataUpdateId.image){
                deleteFile(dataUpdateId.image)
            }
            dataUpdate.image = req?.file?.filename
        }

        await dataUpdateId.updateOne(dataUpdate)

        return res.json({
            status: true,
            message: "Data Updated",
            data: dataUpdateId
        })

    } catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const dataUpdateStatus = async (req , res) => {

    try{

        const { _id } = req?.params

        const { status } = req?.body

        const dataUpdateId = await PriceListModel.findById({ _id })

        if(!dataUpdateId){
            return res.status(422).json({
                status: false,
                message: "Can't Find Data for Update"
            })
        }

        await dataUpdateId.updateOne({status})

        return res.json({
            status: true,
            message: "Data Updated",
            data: dataUpdateId
        })

    } catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { dataCreate , dataRead , dataDelete , dataUpdate , dataUpdateStatus };