import RecipeModel from '../models/recipeModel.js'

const RecipeController = {
    async getAllRecipes (req, res) {
        const allRecipes = await RecipeModel.getAllRecipes();
        res.send(allRecipes)
    },
    async createRecipe (req, res){
        const { title, description, ingredients, cookingTime, difficulty, category } = req.body;
        const newRecipe = new RecipeModel({
            title,
            description,
            ingredients,
            cookingTime,
            difficulty,
            category,
        });
        const createdRecipe = await RecipeModel.createRecipe(newRecipe)
        res.send(createdRecipe);
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
    async recipesByCategory(req, res){
        const recipesByCategory = await RecipeModel.recipesByCategory(req.params.category)
        res.send(recipesByCategory);
    },
    async recipesByTitle(req, res){
        const recipesByTitle = await RecipeModel.recipesByTitle(req.query.title)
        res.send(recipesByTitle);
    },
    async recipesByDifficulty(req, res){
        console.log(req.query.difficulty)
        const recipesByDifficulty = await RecipeModel.recipesByDifficulty(req.query.difficulty)
        res.send(recipesByDifficulty);
    },
};
export default RecipeController;

