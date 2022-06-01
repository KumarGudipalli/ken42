const mongoose = require('mongoose')
const url = "mongodb+srv://Kumar:Kumar123@cluster0.aem3t.mongodb.net/ken42"

mongoose.connect(url);

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
