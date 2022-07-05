const Todo = require('../models/Todo')
// post todo
exports.addTodo= async(req, res)=>{
try{
 const newTodo = new Todo(req.body)
 await newTodo.save()
 res.status(201).json({message:"Todo add successfully"})
}
catch(error){
   res.status(500).json({message:`try again please${error}`})
}
}
// update todo
exports.updateTodo= async(req, res)=>{
try{
    const {title , category , description}=req.body
    const todo = await Todo.findById(req.params.id)
    if(!todo){
        return res.status(404).json({message:"no todo data found by id"})
    }
    todo.title= title?title:todo.title
    todo.category = category?category:todo.category 
    todo.description = description?description:todo.description 
    await todo.save()
    res.status(201).json({message:"todo update successfully"})
}
catch(error){
   res.status(500).json({message:`try again please${error}`})
}
}

// delete todo
exports.deleteTodo= async(req, res)=>{
try{
    await Todo.findByIdAndRemove(req.params.id)
    res.status(201).json({message:"delete todo successfully"})
}
catch(error){
   res.status(500).json({message:`try again please${error}`})
}
}

// get all todos
exports.getTodos= async(req, res)=>{
try{
    const toDos = await Todo.find() 
    if(toDos.length === 0){
        return res.status(404).json({message:"todos not found"})
    }
    res.status(201).json(toDos)
}
catch(error){
   res.status(500).json({message:`try again please${error}`})
}
}
// get single todo by id
exports.getTodo= async(req, res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            return res.status(404).json({message:"todo not found"})
        }
        res.status(201).json(todo)  
    }
    catch(error){
       res.status(500).json({message:`try again please${error}`})
    }
    }
// search todo 
exports.searchTodo= async(req, res)=>{
try{

}
catch(error){
   res.status(500).json({message:`try again please${error}`})
}
}
