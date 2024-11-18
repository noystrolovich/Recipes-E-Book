const recipe = require('../models/recipeModel');

const getAllRecipes = () => {
    return recipe.find();
}

const getRecipeById = (id) => {
    return recipe.findById(id);
}

const newRecipe = (obj) => {
    const newRecipe = new recipe(obj);
    console.log(newRecipe);
    return newRecipe.save();
}

const updateRecipe = (id,obj) => {
    return recipe.findByIdAndUpdate(id,obj);
}

const deleteRecipe = (id) => {
    return recipe.findByIdAndDelete(id);
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    newRecipe,
    updateRecipe,
    deleteRecipe
}