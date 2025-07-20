import express, { Request, Response } from "express";
import { getAllTasks } from "./localstorage";
import { TaskProps } from "./type/Task.interface";


const app = express();
const PORT = 3000;

const tasks: TaskProps[] = getAllTasks()

app.use(express.json());

app.get('/tasks', (req, res) => {
    console.log(tasks)
    res.json(tasks)
})

app.get('/tasks/task/:id', (req, res) => {
    const id = req.params.id
    const task = tasks.find((task: TaskProps) => task.id === id)

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task)
})



app.listen(PORT, () => {
  console.log(` Server working on http://localhost:${PORT}...`);
});