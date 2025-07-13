import { type FC } from "react";
import styles from "./TaskList.module.scss";
import TaskContainer from "./compomemts/tasks/TaskContainer";
import AddTaskForm from "./compomemts/addTask/AddTaskForm";

const TaskList: FC = () => {
	return (
		<>
			<div className={styles.taskList}>
				<section className={styles.taskList__contentPanel}>
					<TaskContainer />
				</section>
				<section className={styles.taskList__addPanel}><AddTaskForm/></section>
			</div>
		</>
	);
};

export default TaskList;
