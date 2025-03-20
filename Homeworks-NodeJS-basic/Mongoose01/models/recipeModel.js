import { ObjectId } from 'mongodb';
import { getDB } from "../config/db.config.js";

const RecipeModel = {
    async getAllRecipes(){
        const recipes = await getDB().collection('recipes').find({}).toArray();
        return recipes
    },
    async createRecipe(body){
        const newRecipe = await getDB().collection('recipes').insertOne(body);
        console.log(newRecipe);
        return body;
    },
    async updateRecipe(id, body){
        const unpdatedRecipe = await getDB().collection('recipes').updateOne(
            {_id: new ObjectId(id)}, {$set: body}
        )
        console.log(unpdatedRecipe)
        return body
    },
    async deleteRecipe(id){
        const deletedRecipe = await getDB().collection('recipes').deleteOne({_id: new ObjectId(id)});
        console.log(deletedRecipe);
    },
    async findRecipe(id){
        const foundRecipe = await getDB().collection('recipes').findOne({_id: new ObjectId(id)});
        console.log(foundRecipe)
        return foundRecipe
    },
};
export default RecipeModel