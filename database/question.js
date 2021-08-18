const mongoose = require('mongoose')    
const ques = mongoose.Schema({
    Question: String
})
module.exports =  mongoose.model( 'question' , ques)