const router = require('express').Router()
const {addTodo , 
    getTodos,
    deleteTodo, 
    updateTodo ,
    getTodo ,
    searchTodo}= require('../controllers/todo')

const {addTodoValidation , 
      updateTodoValidation , 
      idValidation} = require('../validator/todo')
const validationResult  = require('../validator')

router.post('/' ,addTodoValidation ,validationResult ,addTodo )
router.patch('/:id',
updateTodoValidation ,
idValidation,
validationResult,
updateTodo)
router.delete('/:id',
idValidation,
validationResult,
deleteTodo )
router.get('/' ,getTodos)
router.get('/search' ,searchTodo)
router.get('/:id', idValidation, validationResult, getTodo)

module.exports = router