// importing requirments

const express = require('express');
const controller = require('./controller/contrlloer.js')
const route = express.Router();
const bodyparser = require('body-parser')

route.unsubscribe(bodyparser.urlencoded());

//requests


route.get('/',controller.home);

route.get('/faq',controller.faq);

route.post('/faq',controller.faq);

route.delete('/delete/:id',controller.delete);

route.get('/faq/edit/:preQ/:newQ',controller.edit);

route.post('/postQuestion',controller.postQuestion);

route.post('/postAnswer/:id',controller.postAnswer);

module.exports = route;
