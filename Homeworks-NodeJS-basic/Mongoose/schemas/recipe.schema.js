import { optional, z } from 'zod';

export const createRecipeSchema = z.object({
	title: z
		.string()
		.min(2, 'Name must be at least 2 characters long')
		.max(50, 'Name cannot exceed 50 characters'),
	description: z.string(),
	ingredients: z.string(),
	instructions: z.string(),
	cookingTime: z.number() .min(1, 'Cookung time must be at least 1 character long'),
	difficulty: z.enum (['easy', 'medium', 'hard']),
	isVegetarian: z.boolean(),
	category: z.enum(['breakfast', 'lunch', 'dinner', 'dessert'])
});

export const updateRecipeSchema = createRecipeSchema.partial();
