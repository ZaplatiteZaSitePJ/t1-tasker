import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "./getAllTasks";

export const deleteTask = (id: number) => {
	const taskId = id;
	const allTasks = getAllTasks();

	const newTasks = allTasks.filter((task: TaskProps) => task.id !== taskId);

	localStorage.setItem("tasks", JSON.stringify(newTasks));
};
