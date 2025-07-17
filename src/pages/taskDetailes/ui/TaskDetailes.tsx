import { useState } from "react";
import styles from "./TaskDetailes.module.scss";
import cn from "classnames";
import TaskDetailesForm from "./TaskDetailesForm";

export default function TaskDetailes() {
	const [isReadonly, setIsReadonly] = useState<boolean>(true);

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
			<div className={styles.taskDetailes__buttonsContainer}>
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

			<TaskDetailesForm
				isReadOnly={isReadonly}
				setReadonly={setReadonly}
			/>
		</div>
	);
}
