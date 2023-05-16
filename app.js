require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _= require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


//db connection//
async function connect(){
    try {
        await mongoose.connect(process.env.dbURL)
        console.log('connected');
    } catch(err) {
        console.log('not connected');
    }
}
connect();

const agendaRoutes = require('./routes/agendaRouter');


app.use('/', agendaRoutes);


const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log('Server running on port 3000');
});