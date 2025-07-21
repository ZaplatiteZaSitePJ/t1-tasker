import styles from "./TaskList.module.scss";
import { TaskItem } from "@entities/Task";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchTasksTH } from "@features/Tasks/api/storeModel/tasks.thunk";
import { useAppDispatch, useAppSelector } from "@features/Tasks/api/storeModel/hooks";

export default function TaskList() {
const dispatch = useAppDispatch();
const tasks = useAppSelector(state => state.tasks.list);
const loading = useAppSelector(state => state.tasks.loading);

useEffect(() => {
  dispatch(fetchTasksTH());
}, [dispatch]);

  if (loading) return <div><p>Tasks loading...</p></div>;

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
