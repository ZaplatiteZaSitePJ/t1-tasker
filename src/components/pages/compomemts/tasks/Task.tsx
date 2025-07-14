import { type FC } from "react";
import styles from "./Task.module.scss";
import Card from "../../../ui/cards/Card";
import type { TaskProps } from "./Task.interface";
import getColroFromPriorities from "../../../../funcs/getColorFromPriorities";

const Task: FC<TaskProps> = ({
	id,
	title = "Без названия",
	description = "",
	category = "Bug",
	status = "To-do",
	priorites = "High",
	endTime = "None",
	startTime = "None",
	progress = 0,
}) => {
	return (
		<Card
			key={id}
			cardBorderColor={getColroFromPriorities(priorites)}
			topPanel={
				<TaskTopPanel
					startTime={startTime}
					endTime={endTime}
					priorites={priorites}
				/>
			}
			bottomPanel={
				<TaskBottomPanel category={category} status={status} />
			}
			contentPanel={{
				title: title,
				content: description,
				optional: (
					<TaskProgressBar
						progress={progress}
						priorites={priorites}
					/>
				),
				visability: "hovered",
			}}
		/>
	);
};

export default Task;

const TaskTopPanel: FC<
	Pick<TaskProps, "startTime" | "endTime" | "priorites">
> = ({ startTime, endTime, priorites }) => {
	if (startTime === "None" && endTime === "None") return <></>;

	return (
		<div className={styles.topPanel}>
			<p style={{ color: getColroFromPriorities(priorites) }}>
				{startTime} - {endTime}
			</p>
		</div>
	);
};

const TaskBottomPanel: FC<Pick<TaskProps, "category" | "status">> = ({
	category,
	status,
}) => {
	return (
		<div className={styles.bottomPanel}>
			<p>{category}</p>
			<p>{status}</p>
		</div>
	);
};

const TaskProgressBar: FC<Pick<TaskProps, "progress" | "priorites">> = ({
	progress,
	priorites,
}) => {
	return (
		<div className={styles.progressBar}>
			<div
				style={{
					width: `${progress}%`,
					backgroundColor: getColroFromPriorities(priorites),
					height: "0.3rem",
				}}
			></div>
			<p className={styles.progressBar__text}>{progress} %</p>
		</div>
	);
};
