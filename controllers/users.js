const Users = require('../models/Users')
const {hashPassword,comparePassword} = require('../utilits/auth')
exports.singUp = async(req ,res)=>{
    try{
    const {name, email, password }= req.body
    const userSignIn = new Users({
        name , 
        email, 
        password: await hashPassword(password)
    })
    await userSignIn.save()
    res.status(200).json({message:"user sign in successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`please try again${error}`})
       }
} 
exports.getUserLogin= async(req ,res)=>{
    try{
    const { email , password} = req.body;
    console.log(req.body)
     const user = await Users.findOne({email}) 
     console.log(user)
     if(!user){
       return res.status(404).json({message:'invalid cradential'})
     }
     const match = await comparePassword(password, user.password);
     if (!match) {
       return res.status(404).json({ message: 'Invalid credential' });
     }
   
     res.status(200).json({ message: 'user successfully login' });
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`please try again${error}`})
       }
} 
exports.getAllUser= async(req ,res)=>{
    try{
      const allUser = await Users.find()
       res.status(200).json(allUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`please try again${error}`})
       }
} 
exports.singleUserDetail= async(req ,res)=>{
    try{
      // const singleUser = await Users.findById(req.params.id)
      const singleUser = await Users.findOne({_id:req.params.id})
       res.status(200).json(singleUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`please try again${error}`})
       }
} 