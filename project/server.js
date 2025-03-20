// + nmp init -y
require('dotenv').config(); // + npm i dotenv
const express = require('express'); // + npm i express
const mongoose = require('mongoose'); // + npm i mongoose
const expressLayouts = require("express-ejs-layouts"); // + npm i express-ejs-layouts
const cookieParser = require("cookie-parser"); // + npm i cookie-parser
const jwt = require('jsonwebtoken'); // + npm i jsonwebtoken
const bcrypt = require('bcrypt'); // + npm i bcrypt
const methodOverride = require('method-override'); // + npm i method-override


const app = express();
const PORT = process.env.PORT || 5000;

// # View Engine & Layouts & Public Folder - Setup
app.set('view engine', 'ejs'); // + npm i ejs
app.use(expressLayouts ); // express-ejs-layouts
app.use(express.static('public')); // static files ( CSS & JS )

// // # Cookie & Json & UrlEncoded - Setup
// app.use(cookieParser()); // cookies for JWT
// app.use(express.json()); // json format responses
// app.use(express.urlencoded({extended: true}));


// # Home Page
app.get('/', async(req, res) => {
    res.status(200).render('home'); 
});

// # About Page 
app.get('/about', (req,res) => {
    res.render('about');
});


// # Listen on port
app.listen(PORT, () =>{
    console.log(`Listening on Port ${PORT}`);
});