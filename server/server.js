import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"
import cookieParser from'cookie-parser';

import dataBase from "./src/db/connect.js";
dataBase();

import router from "./src/routes/userRoutes.js";
import webRouter from "./src/routes/homeRoutes.js"; 

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,  
}

app.use(cors(corsOptions));

app.use(express.json({type: "application/json"}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); 

app.use("/assets", express.static('public/assets'))

app.get("/", (req, res) => res.send("All Fine!"));

app.use("/auth", router);
app.use("/web", webRouter);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
