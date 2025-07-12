import { type FC } from "react";
import styles from "./TaskList.module.scss";
import Task from "./compomemts/tasks/Task";

const TaskList: FC = () => {
	return (
		<>
			<div className={styles.taskList}>
				<section className={styles.taskList__contentPanel}>
					<Task
						title="прикол"
						description="иди нахуй"
						priorites="High"
						status="To_do"
						category="Bug"
						date="None"
						progress={0}
					/>
				</section>
				<section className={styles.taskList__addPanel}>ало</section>
			</div>
		</>
	);
};

export default TaskList;
