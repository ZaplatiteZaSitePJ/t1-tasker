import { useContext } from "react";
import type { TaskContextProps } from "./TaskContextProp.type";
import { TaskContext } from "./TasksContext";

export const useTasks = (): TaskContextProps => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTasks must be used within a TasksProvider");
	}
	return context;
};
