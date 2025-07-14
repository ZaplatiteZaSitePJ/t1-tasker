import type { Category } from "../../../../types/Category.type";
import type { Priorites } from "../../../../types/Priopites.type";
import type { Status } from "../../../../types/Status.type";

export interface TaskProps {
	id: number;
	title: string;
	description?: string;
	content?: string;
	category: Category;
	status: Status;
	priorites: Priorites;
	startTime: string;
	endTime: string;
	progress: number;
}
