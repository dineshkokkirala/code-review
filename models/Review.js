const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    deployable:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("Review",ReviewSchema);