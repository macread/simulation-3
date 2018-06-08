require('dotenv').config();
const express = require('express') 
    , session = require('express-session') 
    , passport = require('passport') 
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , controller = './controller.js';


const {
    SERVER_PORT,
    // SESSION_SECRET,
    // DOMAIN,
    // CLIENT_ID,
    // CLIENT_SECRET,
    // CALLBACK_URL,
    // CONNECTION_STRING
} = process.env;

const app = express(); //server

app.listen(SERVER_PORT, () => {
    console.log('Listening on port ', SERVER_PORT);
})
