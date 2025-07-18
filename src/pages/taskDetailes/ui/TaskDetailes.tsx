import { useState } from "react";
import styles from "./TaskDetailes.module.scss";
import cn from "classnames";
import TaskDetailesForm from "@widgets/TaskDetailes/ui/TaskDetailesForm";
import { getTask } from "@features/Tasks/api/localstorage";
import { useParams } from "react-router-dom";

export default function TaskDetailes() {
	const [isReadonly, setIsReadonly] = useState<boolean>(true);

	const { id } = useParams<{ id: string }>();
	const task = getTask(String(id));
	const createdAt = task.createdAt;

	const setReadonly = () => {
		setIsReadonly(true);
	};

	const changeMod = (mod: boolean) => {
		if (!mod === isReadonly) {
			setIsReadonly((prev) => !prev);
		}
	};

	return (
		<div className={styles.taskDetailes}>
			<div className={styles.taskDetailes__topContainer}>
				<button
					type="button"
					className={cn(styles.taskDetailes__button, {
						[styles.taskDetailes__active]: isReadonly,
					})}
					onClick={() => changeMod(true)}
				>
					readonly
				</button>
				<span>|</span>
				<button
					type="button"
					className={cn(styles.taskDetailes__button, {
						[styles.taskDetailes__active]: !isReadonly,
					})}
					onClick={() => changeMod(false)}
				>
					editing
				</button>
			</div>

			<p className={styles.taskDetailes__createdAt}>
				<span>created at:</span> {createdAt}
			</p>

			<TaskDetailesForm
				isReadOnly={isReadonly}
				setReadonly={setReadonly}
			/>
		</div>
	);
}
