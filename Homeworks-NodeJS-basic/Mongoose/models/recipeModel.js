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

const RecipeModel = mongoose.model('recipes', recipeSchema);
// const RecipeModel = {
//     async getAllRecipes(){
//         const recipes = await getDB().collection('recipes').find({}).toArray();
//         return recipes
//     },
//     async createRecipe(body){
//         const newRecipe = await getDB().collection('recipes').insertOne(body);
//         console.log(newRecipe);
//         return body;
//     },
//     async updateRecipe(id, body){
//         const unpdatedRecipe = await getDB().collection('recipes').updateOne(
//             {_id: new ObjectId(id)}, {$set: body}
//         )
//         console.log(unpdatedRecipe)
//         return body
//     },
//     async deleteRecipe(id){
//         const deletedRecipe = await getDB().collection('recipes').deleteOne({_id: new ObjectId(id)});
//         console.log(deletedRecipe);
//     },
//     async findRecipe(id){
//         const foundRecipe = await getDB().collection('recipes').findOne({_id: new ObjectId(id)});
//         console.log(foundRecipe)
//         return foundRecipe
//     },
//     async recipesByCategory(categoryToSearch){
//         const recipesByCategory = await getDB().collection('recipes').find({category: categoryToSearch }).toArray();;
//         console.log(recipesByCategory)
//         return recipesByCategory
//     },
//     async recipesByTitle(titleToSearch){
//         const recipesByTitle = await getDB().collection('recipes').find({title: titleToSearch }).toArray();;
//         console.log(recipesByTitle)
//         return recipesByTitle
//     },
//     async recipesByDifficulty(difficultyToSearch){
//         const recipesByDifficulty = await getDB().collection('recipes').find({difficulty: difficultyToSearch }).toArray();;
//         console.log(recipesByDifficulty)
//         return recipesByDifficulty
//     },
// };
// -----
export default RecipeModel;