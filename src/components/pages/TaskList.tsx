import { type FC } from "react";
import styles from "./TaskList.module.scss";

const TaskList: FC = () => {
	return (
		<>
			<div className={styles.taskList}>
				<section className={styles.taskList__contentPanel}>

				</section>
				<section className={styles.taskList__addPanel}>
					ало
				</section>
			</div>
		</>
	);
};

export default TaskList;
