import React from "react";
import styles from "./TaskContainer.module.scss";
import Task from "./Task";
import { useTasks } from "../../../../../context/TasksContext";

export default function TaskContainer() {
	const { tasks } = useTasks();

	if (!tasks) return;

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
