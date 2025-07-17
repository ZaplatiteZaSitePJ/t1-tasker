import type { Category } from "@shared/types/Category.type";
import type { Priorites } from "@shared/types/Priopites.type";
import type { Status } from "@shared/types//Status.type";

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
