import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "./getAllTasks";

export const addTask = (newTask: TaskProps) => {
	let tasks: TaskProps[] = getAllTasks();
	tasks.push(newTask);
	const updatedTasks = JSON.stringify(tasks);
	localStorage.setItem("tasks", updatedTasks);
};
