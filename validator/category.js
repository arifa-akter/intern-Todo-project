const{check , param} =require('express-validator')

exports.categoryValidation =[
    check('title').trim().custom(async(title)=>{
       if(title.length<3){
          throw 'this is not title'
       }
    })
]

