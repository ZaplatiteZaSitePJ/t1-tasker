import type { TaskProps } from "../../components/pages/TaskList_(Main)/components/tasks/Task.interface"
import { getAllTasks } from "./getAllTasks"

export const deleteTask = (id: number) => {
    const taskId = id
    const allTasks = getAllTasks()

    const newTasks = allTasks.filter((task: TaskProps) => task.id !== taskId)

    localStorage.setItem('tasks', JSON.stringify(newTasks))

}