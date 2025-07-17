import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "./getAllTasks";

export const getTask = (id: string) => {
	const taskId = parseInt(id, 10);
	const allTasks = getAllTasks();
	const task: TaskProps = allTasks.find(
		(currentTask: TaskProps) => currentTask.id === taskId
	);
	return task;
};
