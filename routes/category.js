const router = require('express').Router();
const {categoryAdd , getAllCategory ,updateCategory ,singleCategory}= require('../controllers/category')
router.post('/' , categoryAdd)
router.get('/' , getAllCategory)
router.get('/:id' , singleCategory)
router.patch('/:id' , updateCategory)

module.exports = router