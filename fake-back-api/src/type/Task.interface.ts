import type { Category } from "./Category.type";
import type { Priorites } from "./Priopites.type";
import type { Status } from "./Status.type";

export interface TaskProps {
	id: string;
	title: string;
	description?: string;
	content?: string;
	category: Category;
	status: Status;
	priorites: Priorites;
	startTime: string;
	endTime: string;
	progress: number;
	createdAt: string;
}
