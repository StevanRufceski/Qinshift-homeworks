import { getDB } from '../config/db.js';

const TaskModel = {

        async getAllTasks() {
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

