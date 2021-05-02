const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

// import models
const Doctor = require('./models/doctor');

// connect to mongo
mongoose.connect('mongodb://localhost:27017/medplanner', { 
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