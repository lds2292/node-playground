import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config({ path: `./config/.env.${process.env.NODE_ENV}` })

app.get('/', (req, res)=>{
  res.send("Hello World");
})

var server = app.listen(3000, () =>{
  var dbname = process.env.DB_NAME
  console.log('Server is working : NAME = ', dbname);
})