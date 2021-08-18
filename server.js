// importing the requirments

const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const dataBase = require("./database/mongo_config")

// templeting engine set up
app.set('view engine','pug');
app.set('views','view');

//public file set up
app.use("public",express.static('./public'));
app.use(express.urlencoded());

//router set up
app.use(require("./server/router.js"));

app.listen(port,()=>{
    console.log("Sever is running at http://localhost:80")
})