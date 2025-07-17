import { useState, useEffect, createContext } from "react";
import type { ReactNode } from "react";
import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "@features/Tasks/api/localstorage";

type TaskContextProps = {
	tasks: TaskProps[];
	changeTasks: (newTasks: TaskProps[]) => void;
};

export const TaskContext = createContext<TaskContextProps | undefined>(
	undefined
);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<TaskProps[]>([]);

	useEffect(() => {
		const localTasks = getAllTasks();
		if (localTasks) setTasks(localTasks);
	}, []);

	const changeTasks = (newTaskList: TaskProps[]) => {
		setTasks(newTaskList);
	};

	return (
		<TaskContext.Provider value={{ tasks, changeTasks }}>
			{children}
		</TaskContext.Provider>
	);
};
