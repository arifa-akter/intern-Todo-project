const {Schema, model} = require('mongoose')
const CategorySchema = Schema({
    title:{type:String , require:true},
    description:{type:String},
},

    { timestamps: true }
)

module.exports = model('category' , CategorySchema )

