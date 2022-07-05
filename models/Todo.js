// const mongoose = require('mongoose');
// const {Schema , model,} = require('mongoose');
const {Schema , model, mongoose} = require('mongoose');

const todoSchema = Schema({
    title:{type:String , require:true},
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'category'
    },
    description:{type:String}
},
{
  timestamps:true
})

module.exports = model('todo' , todoSchema)