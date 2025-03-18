// import { readFile, writeFile } from "../services/files.services.js";
import { ObjectId } from "mongodb";

import { getDB } from '../config/db.js';

const TaskModel = {

    // async getAllTasks() {
    //     const allTasks = await readFile ('tasks.json');
    //     return allTasks
    // },
    // async createTask(body) {
    //     const allTasks = await readFile ('tasks.json');
    //     const newTask = {
    //         ...body,
    //         id: allTasks.length + 1,
    //         createdAt: new Date().toISOString(),
    //     }
    //     allTasks.push(newTask),
    //     await writeFile('tasks.json', allTasks)
    //     return newTask
    // }
        async getTasks() {
            const tasks = await getDB().collection('tasks').find({}).toArray();
    
            return tasks;
        },
    
        async createTask(body) {
            const result = await getDB().collection('tasks').insertOne(body);
    
            console.log(result);
    
            return body;
        },
}

export default TaskModel;

