import { Router } from "express";
import RecipeController from '../controllers/recipeController.js'
import validateRequest from "../middlewares/validate-request.middleware.js";
import { createRecipeSchema, updateRecipeSchema } from "../schemas/recipe.schema.js";

const router = Router();

router.get('/recipes/', RecipeController.getAllRecipes);
router.post('/recipes/', RecipeController.createRecipe);
router.put('/recipes/:id', RecipeController.updateRecipe);
router.delete('/recipes/:id', RecipeController.deleteRecipe);
router.get('/recipes/:id', RecipeController.findRecipe);
router.get('/recipes/category/:category', RecipeController.recipesByCategory);
router.get('/recipes/search/title', RecipeController.recipesByTitle);
router.get('/recipes/search/difficulty', RecipeController.recipesByDifficulty);

export default router