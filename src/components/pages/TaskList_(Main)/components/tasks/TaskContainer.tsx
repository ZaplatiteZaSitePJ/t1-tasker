import React from "react";
import styles from "./TaskContainer.module.scss";
import type { TaskProps } from "./Task.interface";
import Task from "./Task";
import { getTasks } from "../../../../../funcs/localStorage_api/getTasks";

export default function TaskContainer() {
	const tasks: TaskProps[] = getTasks()

	if (!tasks) return 
	
	return (
		<div className={styles.taskContainer}>
			{tasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					title={task.title}
					description={task.description}
					priorites={task.priorites}
					status={task.status}
					progress={task.progress}
					category={task.category}
					startTime={task.startTime}
					endTime={task.endTime}
				/>
			))}
		</div>
	);
}
