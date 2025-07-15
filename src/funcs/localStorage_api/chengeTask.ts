import type { TaskProps } from "../../components/pages/TaskList_(Main)/components/tasks/Task.interface";
import { getAllTasks } from "./getAllTasks"

export const changeTask = (changedTask: TaskProps) => {
        const taskId = changedTask.id;
        const allTasks = getAllTasks();
        const taskIndex = allTasks.findIndex((task: TaskProps) => task.id === taskId)

        allTasks[taskIndex] = changedTask
        localStorage.setItem('tasks', JSON.stringify(allTasks))
}