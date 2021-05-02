const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// import models
const Doctor = require('./models/doctor');

// connect to mongo
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/medplanner';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.static(path.join(__dirname + '/assets')))

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const sessionConfig = {
    // store,
    name: 'session',
    secret: 'thisissecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));

// tell app to use passport, passport session
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Doctor.authenticate()));
// tell passport how we store a user in the session and how we remove the user
passport.serializeUser(Doctor.serializeUser());
passport.deserializeUser(Doctor.deserializeUser());

app.get('/login', (req, res) => {
    res.render('login-register/login')
})

app.get('/register', (req, res) => {
    res.render('login-register/register')
})

app.get('/', (req, res) => {
    res.redirect('/appointments')
})

app.get('/appointments', (req, res) => {
    res.render('appointments')
})

app.get('/appointments/new', (req, res) => {
    res.render('appointments-new')
})

app.get('/patients', (req, res) => {
    res.render('patients')
})



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})