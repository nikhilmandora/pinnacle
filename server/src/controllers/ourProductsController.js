import OurProduct from "../models/Our_products.js";

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ourProductCreate = async (req , res) => {

    try {

        const { product , area } = req?.body;

        if( !product || !area ||  !req?.file?.filename) {
            return res.status(422).json({
                status: false,
                message: "Flieds are Empty"
            })
        }

        const opDataCreate = {
            product,
            area
        }

        if(req?.file?.filename) {
            opDataCreate.image = req?.file?.filename
        }

        await OurProduct.create(opDataCreate);

        return res.json({
            status: true,
            message: "Data Added Succesfully",
            data: opDataCreate
        })


    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const ourProductRead = async (req, res) => {

    try {

        const { status } = req?.query

        let where = {}

        if(status){
            where = {status: status}
        }

        const productGetRead = await OurProduct.find(where)

        if(!productGetRead) {
            return res.status(422).json({
                status: false,
                message: "Data Not Found" 
            })
        }

        productGetRead.image = process.env.IMAGEBASEURL+'products/' + productGetRead.image;

        return res.json({
            status: true,
            message: "Data Found",
            data: productGetRead
        })

    } catch(error) {

        return res.status(500).json({
            status: false,
            message: error.message
        })

    }

}

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "products" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
         //   console.error('Error Deleting File:', err);
        } else {
        //   console.log('File Deleted Successfully');
        }
    });
}

const ourProductDelete = async (req, res) => {

    try {

        const { _id } = req?.params

        const deleteByID = await OurProduct.findByIdAndDelete({ _id });

        if(!deleteByID) {
            return res.status(422).json({
                status: false,
                message: "Can't Find and Delete"
            })
        }

        if(deleteByID.image) {
            deleteFile(deleteByID.image)
        }

        return res.json({
            status: true,
            message: "Data Deleted Succesfully",
            data: deleteByID
        })
        
    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const ourProductUpdate = async (req, res) => {

    try {

        const { _id } = req?.params;

        const { product , area } = req?.body;

        const newData = {
            product ,
            area
        };

        const productUpdateID = await OurProduct.findById({_id});

        if(req?.file?.filename) {
            if(productUpdateID.image) {
              deleteFile(productUpdateID.image)
            };
            newData.image = req?.file?.filename;
          };

        await productUpdateID.updateOne(newData);

        if(!productUpdateID) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID and Data",
                data: newData
            });
        };

        return res.json({
            status: true,
            message: "Updated Succesfully"
        });

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    };

}

const ourProductUpdateStatus = async (req, res) => {

    try {

        const { _id } = req?.params;

        const { status } = req?.body;

        const productUpdateID = await OurProduct.findById({_id});

        if(!productUpdateID) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID"
            });
        };

        await productUpdateID.updateOne({status});

        return res.json({
            status: true,
            message: "Product Status Updated",
            data: productUpdateID
        });

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    };

}

export default { ourProductCreate , ourProductRead , ourProductDelete , ourProductUpdate , ourProductUpdateStatus }