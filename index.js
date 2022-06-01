const express = require("express");
const mongoose = require('mongoose')
const classRoute = require('./class.Routes')


const app = express();

app.use(express.json())

app.use('/class', classRoute)


const port = 5000


const connect = require("./db.js");

app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));

