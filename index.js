const express = require('express'); //Importing express to create servers and routes
const jwt =require('jsonwebtoken'); //Importing json for token generation and verification
const bcrypt = require('bcryptjs');// Importing bcrypt for hashing 

const app = express(); //initialized app to express

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

app.listen(3000);  
