// main express
const express = require('express');
// morgan
const morgan = require('morgan');
// cors
const cors = require('cors');
// dotenv
const dotenv = require('dotenv');
dotenv.config()

// mongoose connection
const{connect}= require('mongoose')
connect(process.env.DB_CONNECTION).then(()=>console.log('mongoose successfully connected'))
.catch((error)=>console.log(`mongoose not  connect${error}`))

const usersRoute = require('./routes/users')
const categoryRoute = require('./routes/category')
const toDoRoute = require('./routes/todo')
// app execute
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// router connect
app.use('/users' ,usersRoute)
app.use('/category' ,categoryRoute)
app.use('/toDo' ,toDoRoute)

module.exports = app