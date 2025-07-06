import mongoose from "mongoose";

const dataBase = (async ()=>{
    try{
        const connected = await mongoose.connect(process.env.DATA_BASE);
        console.log("DataBase Connected");
    }
    catch(error){
        console.log("Error:" , error);
    }
})

export default dataBase;