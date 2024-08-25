const express = require('express'); //Importing express to create servers and routes
const jwt =require('jsonwebtoken'); //Importing json for token generation and verification
const bcrypt = require('bcryptjs');// Importing bcrypt for hashing 

const app = express(); //initialized app to express

const users = [];  //in-memory user storage, database is not used in this. 

// post route for registration of a new user

app.use(express.static('public'));


const recipes = [
    {name:"salad", ingredients:["lettuce","tomato","cucumber"] },
    {name:"Fruit Smoothie", ingredients: ["banana","strawberry", "yogurt"]},
    {name:"Omelette", ingredients: ["eggs","onions","tomato"]}
];

app.get('/suggest', function(req,res) {
    res.send("Hello world");
    console.log("suggest is running");
    const userIngredients = req.query.ingredients.split(',');
    const suggestions = recipes.(filter =>
        recipes.ingredients.every(ingredients =>userIngredients.includes(ingredient))
    );
        res.json(suggestions);

});

// app.get('/about', function(req,res){
//     res.send("This is the about page");

// });

// app.get('/contact', function(req,res){
//     res.send("This is the contact page");

// });



// app.post('/register', function(req,res) {  //added a post route with register as the url
//     const {username,password}  = req.body; //req.body to receive body of req
//     const password = bcrpt.     //assigning password, 


// })



app.listen(3000);  //listening to port 3000
