require('dotenv').config();
const express = require('express') 
    , session = require('express-session') 
    // , passport = require('passport') 
    // , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller');


const {
    SERVER_PORT,
    SESSION_SECRET,
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

//setup sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))


app.post('/api/user',controller.addUser);
app.post('/api/login',controller.login);
app.post('/api/logout',controller.logout);

app.get('/api/posts', controller.getPosts)

app.listen(SERVER_PORT, () => {
    console.log('Listening on port ', SERVER_PORT);
})
