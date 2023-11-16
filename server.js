const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

const router = require(path.join(__dirname, 'app' , 'route.js'));

//const router = require('/app/routes.js');
app.listen(process.env.PORT_HTTP,() => { 
    if(process.env.APP_ENV == 'dev') {
       console.log('serveur start on http://localhost:'+process.env.PORT_HTTP);
    }
   
 })