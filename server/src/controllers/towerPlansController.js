import TowerPlansModel from "../models/TowerPlans_Models.js";

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const towerPlansCreate = async (req , res) => {

    try {

        const { button } = req?.body

        if(!button){
            return res.status(422).json({
                status: false,
                message: "Button Not Found"
            })
        }

        const dataCreate = {
            button
        }

        if(req?.file?.filename){
            dataCreate.image = req?.file?.filename
        }

        const dataCreated = await TowerPlansModel.create(dataCreate);

        return res.json({
            status: true,
            message: "Data Added",
            data: dataCreated
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

};

const towerPlansRead = async (req , res) => {

    try {

        const { status } = req?.query

        let where = {}

        if(status){
            where = {status: status}
        }

        const dataRead = await TowerPlansModel.find(where)

        if(!dataRead){
            return res.status(422).json({
                status: false,
                message: "No Data Found"
            })
        }

        const updatedData = dataRead.map(item => {
            return {
                ...item._doc,
                image: process.env.IMAGEBASEURL + "towerPlans/" + item.image
            };
        });

        return res.json({
            status: true,
            message: "Data Found",
            data: updatedData
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

};

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "towerPlans" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
            // console.error('Error Deleting File:', err);
        } else {
            // console.log('File Deleted Successfully');
        }
    });
};

const towerPlansDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const dataDelete = await TowerPlansModel.findByIdAndDelete({ _id })

        if(!dataDelete){
            return res.status(422).json({
                status: false,
                message: "Data Not Found To Delete"
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

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

};

const towerPlansUpdate = async (req , res) => {

    try {

        const { _id } = req?.params

        const { button } = req?.body

        const dataupdate = {
            button
        }

        const dataUpdateId = await TowerPlansModel.findById({ _id })

        if(!dataUpdateId){
            return res.status(422).json({
                status: false,
                message: "ID Not Found"
            })
        }

        if(req?.file?.filename){
            if(dataUpdateId.image){
                deleteFile(dataUpdateId.image)
            }
            dataupdate.image = req?.file?.filename
        }

        await dataUpdateId.updateOne(dataupdate);

        return res.json({
            status: true,
            message: "Data Updated",
            data: dataUpdateId
        })


    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

};

const towerPlansUpdateStatus = async (req , res) => {

    try {

        const { _id } = req?.params

        const { status } = req?.body

        const dataUpdateId = await TowerPlansModel.findById({ _id })

        if(!dataUpdateId){
            return res.status(422).json({
                status: false,
                message: "ID Not Found"
            })
        }

        await dataUpdateId.updateOne({status});

        return res.json({
            status: true,
            message: "Status Updated",
            data: dataUpdateId
        })


    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

};

export default { towerPlansCreate , towerPlansRead , towerPlansDelete , towerPlansUpdate , towerPlansUpdateStatus };