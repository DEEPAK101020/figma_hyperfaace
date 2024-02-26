const express=require("express");
const {cardModel}=require("./card.model")

const cardRoute=express.Router();

cardRoute.get("/details",async(req,res)=>{
    try{
        const  card=await cardModel.find();
        res.status(200).json(card)
    }catch(err){
        res.status(400).json({error:err})
    }
})
module.exports={
    cardRoute
}