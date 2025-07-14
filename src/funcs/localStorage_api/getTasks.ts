import { fillTasksFirstTime } from "./fillTasksFirstTime"

export const getTasks = () => {
    let wasVisited = localStorage.getItem('wasVisited')

    if (!wasVisited) {
        fillTasksFirstTime()
    }

    let tasks = localStorage.getItem('tasks')

    if (tasks) return JSON.parse(tasks) 
}