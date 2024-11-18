const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name : String,
    ingredients : Array,
    instructions : String,
    preparationTime : Number,
    category : String
},{versionKey: false});

const recipe = mongoose.model("recipe",recipeSchema,"recipes");

module.exports = recipe;