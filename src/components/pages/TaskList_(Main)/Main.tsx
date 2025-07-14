import { type FC } from "react";
import styles from "./Main.module.scss";
import TaskList from "./components/tasks/TaskList";
import AddTaskForm from "./components/addTask/AddTaskForm";

const Main: FC = () => {
	return (
		<>
			<div className={styles.taskList}>
				<section className={styles.taskList__contentPanel}>
					<TaskList />
				</section>
				<section className={styles.taskList__addPanel}>
					<AddTaskForm />
				</section>
			</div>
		</>
	);
};

export default Main;
