const express = require('express');
const app = express(); 


// load config from env file

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json request body

app.use(express.json());

//import routes for TODO API

const todoRoutes = require("./routes/todos");

//mount the todo ASPI routes 
app.use("/api/v1", todoRoutes);


// START SERVER
app.listen(PORT, ()=>{
  console.log("Server started at 3000");
})

// connect to the database
const dbConnect = require("./config/database");

dbConnect();


// default Route

app.get("/", (req,res) =>{
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
});
