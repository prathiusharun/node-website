const express = require('express'); //Importing express to create servers and routes
const jwt =require('jsonwebtoken'); //Importing json for token generation and verification
const bcrypt = require('bcryptjs');// Importing bcrypt for hashing 

const app = express; //initialized app to express

const users = [];  //in-memory user storage, database is not used in this. 

// post route for registration of a new user

app.get('/', function(req,res) {
    res.send("Hello world");
})



// app.post('/register', function(req,res) {  //added a post route with register as the url
//     const {username,password}  = req.body; //req.body to receive body of req
//     const password = bcrpt.     //assigning password, 


// })

app.listen(3000);  //listening to port 3000
