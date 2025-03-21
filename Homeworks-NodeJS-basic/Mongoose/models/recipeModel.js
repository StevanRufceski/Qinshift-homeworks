import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
    cookingTime: {
        type: Number,
        min: 1,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
    },
    isVegetarian: {
        type: Boolean,
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'dessert'],
    },
});
recipeSchema.statics.recipesByDifficulty = function(difficulty) {
    return this.find({ difficulty: difficulty });
};
recipeSchema.statics.recipesByTitle = function(title) {
    return this.find({ title: title });
};
recipeSchema.statics.recipesByCategory = function(category) {
    return this.find({ category: category });
};
recipeSchema.statics.findRecipe = function(id) {
    return this.find({ _id: id });
};
recipeSchema.statics.deleteRecipe = function(id) {
    return this.deleteOne({ _id: id });
};
recipeSchema.statics.updateRecipe = function(id, body) {
    return this.updateOne({ _id: id }, {$set: body});
};
recipeSchema.statics.createRecipe = function(newRecipe) {
    return this.insertOne(newRecipe);
};
recipeSchema.statics.getAllRecipes = function() {
    return this.find();
};
// 

const RecipeModel = mongoose.model('recipes', recipeSchema);

export default RecipeModel;