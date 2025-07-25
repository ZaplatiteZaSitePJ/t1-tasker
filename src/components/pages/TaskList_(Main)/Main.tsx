import { useState, type FC } from "react";
import styles from "./Main.module.scss";
import TaskList from "./components/tasks/TaskList";
import AddTaskForm from "./components/addTask/AddTaskForm";
import Modal from "../../modals/Modals";

const Main: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleOpen = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	return (
		<>
			<div className={styles.taskList}>
				<button className={styles.addButton} onClick={handleOpen}>
					+
				</button>
				{showModal && (
					<Modal onClose={handleClose}>
						<AddTaskForm />
					</Modal>
				)}

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
