const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./Routes/router");
require("./db/conn");

const app = express();

const PORT = 5004;

app.use(cors());
app.use(express.json());
app.use(router);

// app.get('/',(req,res)=>{
//     res.status(200).json("server start");
// })

app.listen(PORT,()=>{
    console.log("server is running at port no ",PORT)
})