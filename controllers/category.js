const Category = require('../models/Category')
exports.categoryAdd =async (req , res)=>{
    try{
        const categoryPost = new Category(req.body)
        await categoryPost.save()
        res.status(200).json({message:'category create  successfully'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`category not found${error}`})   
    }

}
exports.getAllCategory =async (req , res)=>{
    try{
        const getCategory = await Category.find()
        res.status(200).json(getCategory)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`category not found${error}`})   
    }

}
exports.updateCategory =async (req , res)=>{
    try{
       const {title , description} =req.body
       const categoryUpdate =  await Category.findById(req.params.id)
       categoryUpdate.title = title? title:categoryUpdate.title
       categoryUpdate.description = description?description:categoryUpdate.description 
       await categoryUpdate.save()
       res.status(200).json({message:"update successfully"})
      
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`category not found${error}`})   
    }

}
exports.singleCategory =async (req , res)=>{
    try{
       const singleCategory = await Category.findById(req.params.id)
       res.status(200).json(singleCategory)
      
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`category not found${error}`})   
    }

}
exports.deleteCategory =async (req , res)=>{
    try{
       await Category.findByIdAndDelete(req.params.id)
       res.status(200).json({message:"delete id successfully"})
      
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`category not found${error}`})   
    }

}