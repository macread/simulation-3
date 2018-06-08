require('dotenv').config();
const express = require('express') 
    // , session = require('express-session') 
    // , passport = require('passport') 
    // , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller');


const {
    SERVER_PORT,
    // SESSION_SECRET,
    // DOMAIN,
    // CLIENT_ID,
    // CLIENT_SECRET,
    // CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express(); //server
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
});


app.post('/api/user',controller.addUser);

app.listen(SERVER_PORT, () => {
    console.log('Listening on port ', SERVER_PORT);
})
