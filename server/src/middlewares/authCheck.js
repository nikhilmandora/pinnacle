import jwt from 'jsonwebtoken';

const authCheck = (req, res, next) => {

  try {
  
    let  token = req.cookies?.token;
    
    if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        if (authHeader.startsWith("Bearer ")) {
          token = authHeader.split(" ")[1];
        }
      }
   
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token provided. Please log in.",
      });
    }

    jwt.verify(token, process.env.SECRATEKEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: false,
          message: "Invalid or expired token.",
        });
      }

      req.user = decoded;

      next();

    });
    
  } catch (error) {
    console.log("error", error)
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

export default authCheck; 
