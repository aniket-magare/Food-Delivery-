import foodMOdel from "../models/foodModel.js";
import fs from 'fs'


// add food item
 const addFood = async(req,res) => {

    let image_filename=`${req.file.filename}`;
    const food = new foodMOdel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error" })
        
    }
    
 }

 //all foodlist, add food ite m  // logic for accessing fooditem nd sent them as response 
 const listFood = async(req,res) =>{
    try {
        const foods = await foodMOdel.find({}); // fetch all the food item
        res.json({sucess:true,data:foods}) 
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
 }

// remove food item
const  removeFood = async (req,res) => {
    try {
        const food= await foodMOdel.findById(req.body.id ) // to find the foodmodel using id
        fs.unlink(`uploads/${food.image}`, ()=>{})   // we can delete the image from folder

        await foodMOdel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food removed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
               
    }
    
}


 export{addFood,listFood,removeFood }