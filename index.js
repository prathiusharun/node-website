const express = require('express'); //Importing express to create servers and routes
const jwt =require('jsonwebtoken'); //Importing json for token generation and verification
const bcrypt = require('bcryptjs');// Importing bcrypt for hashing 

const app = express; //initialized app to express

const users = [];  //in-memory user storage, database is not used in this. 

// post route for registration of a new user

app.post('/register', function(req,res) {  //added a post route
    const {username,password}  = req.body; //req.body to receive body of req
    const password =      //assigning password
})
