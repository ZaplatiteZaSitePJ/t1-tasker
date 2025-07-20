import type { AppState } from "@app/store/store";
import styles from "./TaskList.module.scss";
import { TaskItem } from "@entities/Task";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TaskList() {
	const tasks = useSelector((state: AppState) => state.tasks);

	if (!tasks) return;

	return (
		<div className={styles.taskContainer}>
			{tasks.map((task) => (
				<Link to={`/tasks/${task.id}`} className={styles.link} key={task.id}>
					<TaskItem
						id={task.id}
						title={task.title}
						description={task.description}
						priorites={task.priorites}
						status={task.status}
						progress={task.progress}
						category={task.category}
						startTime={task.startTime}
						endTime={task.endTime}
						createdAt={task.createdAt}
					/>
				</Link>
			))}
		</div>
	);
}
