const {check , param} = require('express-validator')
const emailValidation = require('../utilits/emailValidation')


exports.addValidation = [

    check('name').trim().notEmpty().withMessage('name is require')
    .custom(async(name)=>{
      if(name.length<3){
        throw 'must up to three character'
      }
    }),
    check('email').toLowerCase()
    .custom(async(email)=>{
        const output = emailValidation(email)
        // emailValidation return null or some thing ekhne output ar null same kotha ekhne null true
        // korar jonno ami ! user korchi .
        if(!output){
           throw 'email is invalid email'
        }

    }),

    check('password')
    .trim().custom(async(password)=>{
        if(password.length < 6){
            throw ' password must be 6 character'
        }
    })
]
exports.loginValidation = [

    check('email').toLowerCase()
    .custom(async(email)=>{
        const output = emailValidation(email)
        // emailValidation return null or some thing
        if(!output){
           throw 'email is invalid email'
        }

    }),

    check('password')
    .trim().custom(async(password)=>{
        if(password.length < 6){
            throw ' password must be 6 character'
        }
    })
]

