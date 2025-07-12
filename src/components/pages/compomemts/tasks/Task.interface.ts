import type { Category } from "../../../../types/Category.type";
import type { Priorites } from "../../../../types/Priopites.type";
import type { Status } from "../../../../types/Status.type";

export interface Task {
    title: string,
    description: string,
    category: Category,
    status: Status,
    priorites: Priorites,
    date: string,
    progress: number
}