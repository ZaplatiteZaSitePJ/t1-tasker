import type { TaskProps } from "../../components/pages/TaskList_(Main)/components/tasks/Task.interface"
import { getTasks } from "./getTasks"

export const addTask = (newTask: TaskProps) => {
    let tasks: TaskProps[] = getTasks()
    tasks.push(newTask)
    const updatedTasks = JSON.stringify(tasks)
    localStorage.setItem('tasks', updatedTasks)
}