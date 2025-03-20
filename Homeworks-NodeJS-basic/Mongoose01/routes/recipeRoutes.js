import { Router } from "express";
import RecipeController from '../controllers/recipeController.js'

const router = Router();

router.get('/', RecipeController.getAllRecipes);
router.post('/', RecipeController.createRecipe);
router.put('/:id', RecipeController.updateRecipe);
router.delete('/:id', RecipeController.deleteRecipe);
router.get('/:id', RecipeController.getAllRecipes);

export default router