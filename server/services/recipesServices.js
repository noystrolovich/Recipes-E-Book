const recipesRepository = require('../repositories/recipesRepository');

const getAllRecipes = async () => {
    return await recipesRepository.getAllRecipes();
}

const getRecipeById = async (id) => {
    return await recipesRepository.getRecipeById(id);

}

const newRecipe = async (obj) => {
    return await recipesRepository.newRecipe(obj);
}

const updateRecipe = async (id,obj) => {
    return await recipesRepository.updateRecipe(id,obj);

}

const deleteRecipe = async (id) => {
    return await recipesRepository.deleteRecipe(id);

}

module.exports = {
    getAllRecipes,
    getRecipeById,
    newRecipe,
    updateRecipe,
    deleteRecipe
}