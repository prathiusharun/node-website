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
    const userIngredients = req.query.ingredients;

    console.log("query parameters", req.query);

    console.log("ingredients received");

    if (!userIngredients) {
        return res.status(400).json({ error: 'No ingredients provided' });
    }
    
    const ingredientsArray = userIngredients.split(',').map(ingredient => ingredientsArray.includes(ingredient));

    const suggestions = recipes.filter(recipe => {
        if (!recipe.ingredients){
            return false
        }

       return recipes.ingredients.every(ingredient =>userIngredients.includes(ingredient))
    });

        console.log("Suggested recipes", suggestions);
        if(suggestions.length === 0){
            console.log("No recipes match the provided ingredients");
            return res.status(200).json({message:"No recipes found"});
        }

        res.json(suggestions);

});

app.listen(3000);  
