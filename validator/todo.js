// third party package gulo amra first import like mongoose korbo amr toire 
// package gulo ami tar pore import korbo
const mongoose= require('mongoose')
const {check , param}= require('express-validator')


exports.addTodoValidation=[
    check('title')
    .trim()
    .notEmpty()
    .withMessage('title is require'),

    check('category').custom(async(category)=>{
        if(!category){
            throw 'category is require'
        }
        if(!mongoose.Types.ObjectId.isValid(category)){
          throw'NO category data found by category id'
        }
    })
]
exports.updateTodoValidation=[
    check('category').custom(async(category)=>{
        if(category){
            if(!mongoose.Types.ObjectId.isValid(category)){
                throw 'no category data found by category id'
            }
        }
    })
]
exports.idValidation=[
    param('id').custom(async(id)=>{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw 'no todo data found by todo id'
        }

    })

]