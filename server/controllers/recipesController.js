const express = require('express');
const recipesServices = require('../services/recipesServices');

const router = express.Router();

router.get('/',async (req,res)=>{
    const recipes = await recipesServices.getAllRecipes()
    res.json(recipes);
});

router.get('/:id',async (req,res)=>{
    const {id} = req.params
    const recipe = await recipesServices.getRecipeById(id);
    res.json(recipe);
});

router.post('/',async (req,res)=>{
    const obj = req.body
    const result = await recipesServices.newRecipe(obj);
    res.json(result);
});

router.put('/:id',async (req,res)=>{
    const obj = req.body
    const {id} = req.params
    const result = await recipesServices.updateRecipe(id,obj);
    res.json(result);
});

router.delete('/:id',async (req,res)=>{
    const {id} = req.params
    const result = await recipesServices.deleteRecipe(id);
    res.json(result);
});

module.exports = router;