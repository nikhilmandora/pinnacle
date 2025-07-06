import Hero from "../models/HeroSection.js";

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const heroCreate = async (req , res) => {

  try {

    const { heading , subHeading , subSubHeading , button , text } = req?.body

    if( !heading || !subHeading || !subSubHeading || !button || !text ) {
      return res.status(422).json({
        status: false,
        message: "Empty Inputs Can't Proceed"
      });
    }

    const heroSecCreate = await Hero.create({
      heading , 
      subHeading , 
      subSubHeading , 
      button,
      text
    })

    if( heading , subHeading , subSubHeading , button , text ) {
      return res.json({
        status: true,
        message: "Fields Added Succesfully",
        data: heroSecCreate
      });
    }    

  } catch(error) {

    return res.status(500).json({
      status: false,
      message: error.message
    })

  }

};

const heroRead = async (req , res) => {

  try {

    const heroGetRead = await Hero.findOne({})

    if(!heroGetRead) {
      return res.status(422).json({
        status: false,
        message: "Data Not Found"
      });
    }

    heroGetRead.image = process.env.IMAGEBASEURL+'header/' + heroGetRead.image;

    return res.json({
      status: true,
      message: "Data Found",
      data: heroGetRead
    })

  } catch(error) {
    return res.status(500).json({
      status: false,
      message: error.message
    })
  }

};

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "header" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
          // console.error('Error Deleting File:', err);
        } else {
          // console.log('File Deleted Successfully');
        }
    });
};

const heroUpdate = async (req , res) => {

  try {

    const { _id } = req?.params
    
    const { heading , subHeading , subSubHeading , button,  text } = req?.body
    
    const data = {
      heading , 
      subHeading , 
      subSubHeading , 
      button,
      text
    }

    const heroUpdateId = await Hero.findById(_id);
    
    if(req?.file?.filename){
      if(heroUpdateId.image) {
        deleteFile(heroUpdateId.image)
      } 
      data.image = req?.file?.filename;
    }
    

    await heroUpdateId.updateOne( data )

    if(!heroUpdateId) {
      return res.status(422).json({
        status: false,
        message: "Can't Find and Update"
      })
    }

    if(heroUpdateId) {
      return res.json({
        status: true,
        message: "Updated Succesfully",
        data: heroUpdateId
      })
    }

  } catch(error) {
    return res.status(500).json({
      status: false,
      message: error.message
    })
  }

};

export default { heroCreate ,  heroRead , heroUpdate };