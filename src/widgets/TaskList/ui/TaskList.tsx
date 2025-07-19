import styles from "./TaskList.module.scss";
import { TaskItem } from "@entities/Task";
import { useTasks } from "@app/context";
import { Link } from "react-router-dom";

export default function TaskList() {
	const { tasks } = useTasks();

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
