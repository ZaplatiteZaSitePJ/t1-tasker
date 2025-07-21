import express, { Request, Response } from "express";
import cors from "cors";
import { TaskProps } from "./type/Task.interface";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
	const data = fs.readFileSync("src/tasks.json", "utf-8");
	const tasks = JSON.parse(data);
	console.log(tasks);
	res.json(tasks);
});

app.get("/tasks/task/:id", (req, res) => {
	const data = fs.readFileSync("src/tasks.json", "utf-8");
	const tasks = JSON.parse(data);
	const id = req.params.id;
	const task = tasks.find((task: TaskProps) => task.id === id);

	if (!task) {
		return res.status(404).json({ message: "Task not found" });
	}

	res.json(task);
});

app.post("/tasks", (req: Request, res: Response) => {
	const data = fs.readFileSync("src/tasks.json", "utf-8");
	const tasks = JSON.parse(data);
	const  task  = req.body;
	if (!task) return res.status(400).json({ message: "task is required" });
	tasks.push(task);
	fs.writeFileSync("src/tasks.json", JSON.stringify(tasks, null, 2), "utf-8");
	
	res.status(201).json(task);
});

app.patch("/tasks/:id", (req: Request, res: Response) => {
	const data = fs.readFileSync("src/tasks.json", "utf-8");
	const tasks = JSON.parse(data);
	const id = req.params.id;
	const changedFields = req.body;

	let task = tasks.find((task: TaskProps) => task.id === id);
	let taskIndex = tasks.findIndex((task:TaskProps) => task.id === id);

	if (!task) return res.status(404).json({ message: "Task not found" });

	task = { ...task, ...changedFields };

	if (!task) return res.status(404).json({ message: "Task not setted" });

	tasks[taskIndex] = task;

	localStorage.setItem("tasks", JSON.stringify(tasks));

	res.status(200).json(task);
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
	const data = fs.readFileSync("src/tasks.json", "utf-8");
	const tasks = JSON.parse(data);
	const id = req.params.id;

	const clearedTasks = tasks.filter((task: TaskProps) => task.id !== id);
	localStorage.setItem("tasks", JSON.stringify(clearedTasks));
	res.status(200).json(clearedTasks);
});

app.listen(PORT, () => {
	console.log(` Server working on http://localhost:${PORT}...`);
});
