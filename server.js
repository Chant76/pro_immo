const express = require('express')
const app = express()
const path = require('path');
const session = require('express-session');
const flash = require('express-flash-messages');
require('dotenv').config();

//      Ajout du midlleware express session
//--------------------------------------------------------------------
app.use(session({
   secret: process.env.APP_KEY, resave:false, saveUninitialized:false, 
   cookie: {maxAge: 3600000} 
}));

//      Fake session pour dev pour esquiver browser 
//  refresh qui nous perd la session à chaque re-démarrage
//--------------------------------------------------------------------
if(process.env.APP_ENV === 'dev') {
   /* A décommenter après avoir codé le système de déconnexion
   app.use((req, res, next) => {
       req.session.user = {
           id: 52,
           email: 'cyrhades76@gmail.com',
           civility: '1',
           lastname: 'Lecomte',
           firstname: 'Cyril'
       };
       next();
   })
   */
}

//      transférer les sessions à toutes les vues (templates)
//--------------------------------------------------------------------
app.use((req, res, next) => {
   res.locals.session = req.session;
   res.locals.route = req._parsedUrl.pathname;
   next();
})


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 //      Ajout du midlleware express session
app.use(session({
   secret: process.env.APP_KEY, resave:false, saveUninitialized:false, 
   cookie: {maxAge: 3600000} 
}));
 //      Ajout du midlleware express flash messages
app.use(flash());
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


//const router = require(path.join(__dirname, 'app' , 'route.js'));
const router = require('./app/route.js');
router(app);



app.listen(process.env.PORT_HTTP,() => { 
    if(process.env.APP_ENV == 'dev') {
       console.log('serveur start on http://localhost:'+process.env.PORT_HTTP);
    }
   
 })