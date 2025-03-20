import RecipeModel from '../models/recipeModel.js'

const RecipeController = {
    async getAllRecipes (req, res) {
        const allRecipes = await RecipeModel.getAllRecipes();
        res.send(allRecipes)
    },
    async createRecipe (req, res){
        const newRecipe = await RecipeModel.createRecipe(req.body)
        res.send(newRecipe);
    },
    async updateRecipe(req, res){
        const updatedRecipe = await RecipeModel.updateRecipe(req.params.id, req.body)
        res.send(updatedRecipe);
    },
    async deleteRecipe(req, res){
        await RecipeModel.deleteRecipe(req.params.id)
        res.sendStatus(204);
    },
    async findRecipe(req, res){
        const foundRecipe = await RecipeModel.findRecipe(req.params.id)
        res.send(foundRecipe);
    },
};
export default RecipeController;