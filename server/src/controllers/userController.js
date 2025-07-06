import User from "../models/User.js";
import bcrypt from 'bcrypt';

import path from "path";
import fs  from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const user_list = async (req, res) => {

  try {

    const userList = await User.find({});

    if (userList) {

      return res.json({
        status: true,
        message: "List of Users",
        data: userList,
      });

    } else {
      return res.status(422).json({
        status: false,
        message: "Error To Get User List",
      });
    }

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error.message
    });

  }

};

const user_delete = async (req, res) => {
  try {
    const { id } = await req.params;

    const userForDelete = await User.findOne({ _id: id });

    if (userForDelete) {
      await User.deleteOne({ _id: id });
      return res.json({
        status: true,
        message: "User Deleted",
      });
    } else {
      return res.status(422).json({
        status: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, "..", "..", "public", "assets" , "profilePic" , filename)
    fs.unlink(filePath, (err) => {
        if (err) {
         //   console.error('Error Deleting File:', err);
        } else {
        //   console.log('File Deleted Successfully');
        }
    });
}

const edit_details = async (req, res) => {

  try {

    const { _id } = req?.params;

    const { password, ...restData } = req?.body;

    const userData = await User.findOne({ _id });

    if (userData) {
  
      Object.assign(userData, restData);

      userData.role = 'admin';
      
      if(password) {
        userData.password = await bcrypt.hash(password, 6);
      }

      if(req?.file?.filename){
        if(userData.image){
          deleteFile(userData.image)
        }
        userData.image = req?.file?.filename
      }

      await userData.save();

      return res.json({
        status: true,
        message: "Update Successfully",
        data: userData,
      });

    };

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
   
    const id = req.user.userId;
    const userData = await User.findById(id);
   
    return res.json({
      status: true,
      message: "User Found",
      data: userData
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

const logout = async (req, res) => {

  try {

    res.clearCookie('authToken');
    
    return res.json({
      status: true,
      message: "Logout Successfully",
    });
    
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }

};


export default { getProfile , user_list , user_delete , edit_details , logout };