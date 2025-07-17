export type TaskContextProps = {
	tasks: TaskProps[];
	changeTasks: (newTasks: TaskProps[]) => void;
};
