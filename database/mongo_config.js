
require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://PocketChat:process.env.mongo_uri@cluster0.qi4oj.mongodb.net/FAQ?retryWrites=true&w=majority`, { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))

module.exports.mongoose;
