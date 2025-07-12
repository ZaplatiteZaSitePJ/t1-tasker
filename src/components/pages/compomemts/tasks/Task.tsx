import React, { type FC } from "react";
import styles from "./Task.module.scss";
import Card from "../../../ui/cards/Card";
import type { TaskProps } from "./Task.interface";

const Task: FC<TaskProps> = ({
	title = "Без названия",
	description = "",
	category = "Bug",
	status = "To_do",
	//	priorites = "High",
	date = "None",
	progress = 0,
}) => {
	return (
		<Card
			topPanel={<TaskTopPanel date={date} />}
			bottomPanel={
				<TaskBottomPanel category={category} status={status} />
			}
			contentPanel={{
				title: title,
				content: description,
				optional: <TaskOptionalPanel progress={progress} />,
			}}
		/>
	);
};

export default Task;

const TaskTopPanel: FC<Pick<TaskProps, "date">> = ({ date }) => {
	if (date !== "None") return;

	return (
		<div className={styles.topPanel}>
			<p>{date}</p>
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

const TaskOptionalPanel: FC<Pick<TaskProps, "progress">> = ({ progress }) => {
	return (
		<div>
			<div style={{ width: `${progress}%` }}></div>
			<p>{progress} %</p>
		</div>
	);
};
