import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const sign_up = async (req, res) => {
  try {
    const { name , email , password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).json({
        status: false,
        message: "User Already Exist",
      });
    }

    if (!name || !email || !password) {
      return res.status(422).json({
        status: false,
        message: "All Fileds Are Required",
      });
    }

    const userData = new User({name , email , password});

    userData.password = await bcrypt.hash(password , 6);

    await userData.save();

    return res.json({
      status: true,
      message: "Sign-Up Successfully",
      data: userData
    })

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

const sign_in = async (req, res) => {
  try {
    const { email , password } = req.body;
    const userExist = await User.findOne({email, role:'admin'});

    if (!userExist) {
      return res.status(422).json({
        status: false,
        message: "Incorrect Email",
      });
    }

    const isPassword = await bcrypt.compare(password , userExist.password); 

    if (!isPassword) {
        return res.status(422).json({
          status: false,
          message: "Incorrect Password",
        });
    }

    const token = jwt.sign(
      { userId: userExist._id, email: userExist.email },
      process.env.SECRATEKEY,
      { expiresIn: '1h' }
    );

    res.cookie("token", token, {
      httpOnly: true, 
      secure: false, 
      sameSite: "Strict", 
      maxAge: 3600000 
    });

    return res.json({
      status: true,
      message: "Login Succesfully",
      token
    });
    
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

export default { sign_up , sign_in };
