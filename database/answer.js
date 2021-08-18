const mongoose = require('mongoose')    
const ans = mongoose.Schema({
    QuesId : String,
    Answer: String
})
module.exports =  mongoose.model( 'answer' , ans)