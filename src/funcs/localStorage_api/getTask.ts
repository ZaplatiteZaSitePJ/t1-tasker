import type { TaskProps } from "../../components/pages/TaskList_(Main)/components/tasks/Task.interface";
import { getAllTasks } from "./getAllTasks"

export const getTask = (id: string) => {
    const taskId = parseInt(String(id), 10)
    const allTasks = getAllTasks();
    const task: TaskProps = allTasks.find((currentTask: TaskProps) => currentTask.id === taskId)
    return task
}