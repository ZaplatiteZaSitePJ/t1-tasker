import { useState, useEffect, useContext, createContext } from "react";
import type { ReactNode } from "react";
import type { TaskProps } from "../components/pages/TaskList_(Main)/components/tasks/Task.interface";
import { getAllTasks } from "../funcs/localStorage_api/getAllTasks";

type TaskContextProps = {
	tasks: TaskProps[];
	changeTasks: (newTasks: TaskProps[]) => void;
};

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

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

export const useTasks = (): TaskContextProps => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTasks must be used within a TasksProvider");
	}
	return context;
};
