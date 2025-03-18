import TaskModel from '../models/tasks.models.js'

const TaskController = {
    async getAllTasks (req, res) {
        const allTasks = await TaskModel.getAllTasks()
        res.send(allTasks)
    },
    async createTask (req, res) {
        const {body} = req;
        const newTask = await TaskModel.createTask(body)
        res.status(201).send(newTask)
    }
}
export default TaskController;