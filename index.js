const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock data: List of recipes with their ingredients
const recipes = [
    { name: "Salad", ingredients: ["lettuce", "tomato", "cucumber"] },
    { name: "Fruit Smoothie", ingredients: ["banana", "strawberry", "yogurt"] },
    { name: "Omelette", ingredients: ["egg", "cheese", "bell pepper"] }
];

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to suggest recipes
app.get('/suggest', (req, res) => {
    console.log('Query parameters', req.query);

    const userIngredients = req.query.ingredients;
    console.log('ingredients received');

    if (!userIngredients) {
        console.log('No ingredients provided');
        return res.status(400).json({ error: 'No ingredients provided' });
    }

    // Define ingredientsArray before using it (Line 28)
    const ingredientsArray = userIngredients.split(',').map(ingredient => ingredient.trim());
    console.log('Parsed ingredients:', ingredientsArray);

    // Ensure the filtering logic is executed after defining ingredientsArray
    const suggestions = recipes.filter(recipe => {
        if (!recipe.ingredients) {
            return false;
        }
        // Using the ingredientsArray here (Line 34)
        return recipe.ingredients.every(ingredient => ingredientsArray.includes(ingredient));
    });

    console.log('Suggested recipes:', suggestions);
    
    if (suggestions.length === 0) {
        console.log('No recipes match the provided ingredients.');
        return res.status(200).json({ message: 'No recipes found' });
    }

    res.json(suggestions);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

