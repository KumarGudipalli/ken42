const mongoose = require('mongoose')

const ClassSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    classes:{
        type:Number,
         required:true
    },
    dept:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required:true,

    },
startTime:{
        type:Number,
        required:true
    },
    EndTime:{
        type:Number,
        required:true
    },

},
{
    timestamps:true
}
)

const classModel = mongoose.model('Class',ClassSchema );

module.exports = classModel