const dotenv = require("dotenv");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
dotenv.config({path:'./config.env'});
require('./db/conn');
var cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(require('./router/auth.jsx'));
const DB=process.env.DATABASE;
const PORT=process.env.PORT || 5000;


app.get('/login',(req,res)=>{
  res.send("this is your login page");
});


app.listen(PORT, ()=>{
  console.log(`server is running at ${PORT}`);
})
