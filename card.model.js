const mongoose=require("mongoose");
const cardSchema=new mongoose.Schema({
    heading:{
        type:String,
    }
    ,
    Image:{
        type:String,

    }
},{
    versionKey:false
})
const cardModel=mongoose.model("card",cardSchema);
module.exports={
    cardModel
}