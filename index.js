
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/assets')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

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