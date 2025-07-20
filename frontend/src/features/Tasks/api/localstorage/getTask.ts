import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "./getAllTasks";

/**
 * Получает задачу по её id полю.
 *
 * Извлекает все задачи из localStorage и находит ту, у которой `id` соответствует переданному значению.
 */

export const getTask = (id: string) => {
	const taskId = id;
	const allTasks = getAllTasks();
	const task: TaskProps = allTasks.find(
		(currentTask: TaskProps) => currentTask.id === taskId
	);
	return task;
};
