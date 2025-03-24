import RecipeModel from '../models/recipeModel.js'

const RecipeController = {    // ova e ok
    async getAllRecipes (req, res) {
        const allRecipes = await RecipeModel.find();
        res.send(allRecipes)
    },
    async createRecipe (req, res){ // ova e ok
        try{
            const { title, description, ingredients, cookingTime, difficulty, category } = req.body;
            const newRecipe = new RecipeModel({
                title,
                description,
                ingredients,
                cookingTime,
                difficulty,
                category,
            });
            const createdRecipe = await newRecipe.save()
            res.status(201).send(createdRecipe);
        } catch (error) {
            res.status(500).send({
                errors: [error.message]
            })
        }
    },
    async updateRecipe(req, res){  // ova e ok

        try {
            const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, {
                new:true
            })
            res.send(updatedRecipe);
        }catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}

    },
    async deleteRecipe(req, res){ // ova e ok
        try{
            await RecipeModel.findByIdAndDelete(req.params.id);
            res.sendStatus(204)
        }catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
        
    },
    async findRecipe(req, res){ // ova e ok
        const foundRecipe = await RecipeModel.findById({_id: req.params.id})
        if (!foundRecipe) {
			res.status(404).send({
				error: `Customer with id: "${req.params.id}" not found`,
			});
			return;
		}
        res.send(foundRecipe);
    },
    async recipesByCategory(req, res){ // ova e ok
        const recipesByCategory = await RecipeModel.find({category: req.params.category})
        if (!recipesByCategory){
            res.status(404).send({error: `Customer with category: "${req.params.category}" not found`})
        return}
        res.send(recipesByCategory);
    },
    async recipesByTitle(req, res){ // ova e ok
        const recipesByTitle = await RecipeModel.find({title: req.query.title})
        if (recipesByTitle.length === 0){
            res.status(404). send ({error: `Customer with title: "${req.query.title}" not found`})
        return}
        res.send(recipesByTitle);
    },
    async recipesByDifficulty(req, res){ // ova e ok
        const recipesByDifficulty = await RecipeModel.find({difficulty: req.query.difficulty})
        if (recipesByDifficulty.length === 0){
            res.status(404). send ({error: `Customer with difficulty: "${req.query.difficulty}" not found`})
        return}
        res.send(recipesByDifficulty);
    },
};
export default RecipeController;

