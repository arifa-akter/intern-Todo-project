const router = require('express').Router();
const {singUp, 
    getUserLogin ,
    getAllUser ,
    singleUserDetail
}= require('../controllers/users')
const {addValidation,loginValidation} = require('../validator/users')
validationResult = require('../validator')
// sign in user 
router.post('/signup' , addValidation ,validationResult , singUp)
// login user
router.post('/signin' ,loginValidation,validationResult, getUserLogin)
// all user get from data base
router.get('/' , getAllUser)
// all user get from data base
router.get('/:id' , singleUserDetail)





module.exports = router