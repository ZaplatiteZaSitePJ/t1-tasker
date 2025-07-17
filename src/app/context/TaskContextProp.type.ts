import type { TaskProps } from "@shared/types/Task.interface";

export type TaskContextProps = {
	tasks: TaskProps[];
	changeTasks: (newTasks: TaskProps[]) => void;
};
