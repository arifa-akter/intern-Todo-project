const router = require('express').Router();
const {categoryAdd , getAllCategory ,updateCategory ,singleCategory  ,deleteCategory}= require('../controllers/category')
const validationResult = require('../validator')
const {categoryValidation} = require('../validator/category')
router.post('/' ,categoryValidation,validationResult, categoryAdd)
router.get('/' , getAllCategory)
router.get('/:id' , singleCategory)
router.patch('/:id',categoryValidation,validationResult,updateCategory)
router.get('/:id' , deleteCategory)

module.exports = router