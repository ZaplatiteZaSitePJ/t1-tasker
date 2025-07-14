import React from "react";
import styles from "./TaskList.module.scss";
import Task from "./Task";
import { useTasks } from "../../../../../context/TasksContext";
import { Link } from "react-router-dom";

export default function TaskList() {
	const { tasks } = useTasks();

	if (!tasks) return;

	return (
		<div className={styles.taskContainer}>
			{tasks.map((task) => (
				<Link to={`/${task.id}`}>
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
				</Link>
			))}
		</div>
	);
}
