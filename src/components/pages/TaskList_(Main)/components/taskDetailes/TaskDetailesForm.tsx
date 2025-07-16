import styles from "./TaskDetailesForm.module.scss";
import cn from "classnames";
import { useForm } from "react-hook-form";
import type { TaskProps } from "../tasks/Task.interface";
import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	ButtonGroup,
	Button,
	Divider,
} from "@mui/material";
import ButtonBordered from "../../../../ui/buttons/ButtonBordered";
import ButtonFilled from "../../../../ui/buttons/ButtonFilled";
import ButtonsParser from "../addTask/funcs/ButtonsParser";
import type { Priorites } from "../../../../../types/Priopites.type";
import getColroFromPriorities from "../../../../../funcs/getColorFromPriorities";
import { timeValidation } from "../../../../../funcs/validation/timeValidation";
import { useTasks } from "../../../../../context/TasksContext";
import { getAllTasks } from "../../../../../funcs/localStorage_api/getAllTasks";
import type { FC } from "react";
import type { TaskDetaileFormProps } from "./TaskDetailesForm.type";
import { useNavigate, useParams } from "react-router-dom";
import { getTask } from "../../../../../funcs/localStorage_api/getTask";
import { changeTask } from "../../../../../funcs/localStorage_api/chengeTask";
import { deleteTask } from "../../../../../funcs/localStorage_api/deleteTask";

const TaskDetailesForm: FC<TaskDetaileFormProps> = ({
	isReadOnly,
	setReadonly,
}) => {
	const { changeTasks } = useTasks();
	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();
	const task = getTask(String(id));

	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<TaskProps>({
		defaultValues: task,
	});

	const status = watch("status");
	const category = watch("category");

	const priorites = watch("priorites");
	const prioritesValues = ["High", "Medium", "Low"];
	const prioritesHadndleChoice = (value: string) => {
		if (!isReadOnly) {
			setValue("priorites", value as Priorites);
			console.log(value);
		}
	};

	const progress = watch("progress");
	const progressValues = ["0%", "25%", "50%", "75%", "100%"];
	const prorgessHandleChoise = (value: number | string) => {
		if (typeof value === "string" && !isReadOnly) {
			const numValue = parseInt(value.slice(0, -1), 10);
			setValue("progress", numValue);
			console.log(value);
		}
	};

	const onReset = () => {
		if (!isReadOnly) {
			reset();
			setReadonly();
		}
	};

	const onDelete = () => {
		if (!isReadOnly) {
			deleteTask(task.id);
			navigate("/");
		}
	};

	const onSubmit = () => {
		if (!isReadOnly) {
			const newTask = {
				...getValues(),
			};

			changeTask(newTask);
			const updatedTasks = getAllTasks();
			changeTasks(updatedTasks);
			setReadonly();
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
					<TextField
						label="title"
						variant="standard"
						fullWidth
						sx={{
							"& .MuiInputBase-input": {
								fontSize: "1.5rem",
								fontWeight: "bold",
							},
						}}
						InputProps={{
							readOnly: isReadOnly,
						}}
						{...register("title", {
							required: "Это поле обязательно",
							minLength: {
								value: 5,
								message: "title min size is 5 symbols",
							},
							maxLength: {
								value: 30,
								message: "title max size is 30 symbols",
							},
						})}
					/>
					{!isReadOnly && (
						<p className={styles.subInfo}>5 - 30 symbols</p>
					)}
					{errors.title && <div className={styles.errorDiv}></div>}
				</FormControl>

				<FormControl>
					<TextField
						label="description"
						variant="standard"
						multiline
						fullWidth
						sx={{
							"& .MuiInputBase-input": {
								fontSize: "var(--normal-font-size)",
								fontWeight: "normal", 
							},
						}}
						InputProps={{
							readOnly: isReadOnly,
						}}
						{...register("description", {
							maxLength: {
								value: 100,
								message: "description max size is 100 symbols",
							},
						})}
					/>
					{!isReadOnly && (
						<p className={styles.subInfo}>{"<"} 100 symbols</p>
					)}
					{errors.description && (
						<div className={styles.errorDiv}></div>
					)}
				</FormControl>

				<div className={styles.addForm__inputsContainer}>
					<div className={styles.addForm__dateContainer}>
						{errors.startTime && (
							<div className={styles.errorDiv}></div>
						)}
						<TextField
							placeholder="12:30"
							label="start"
							id="startTime"
							variant="outlined"
							sx={{
								width: "6rem",
								cursor: isReadOnly ? "not-allowed" : "pointer",
							}}
							InputProps={{
								readOnly: isReadOnly,
							}}
							{...register("startTime", {
								pattern: {
									value: /^([01]\d|2[0-3]):([0-5]\d)$/,
									message:
										"Введите время в формате HH:MM (00:00 - 23:59)",
								},
							})}
						/>

						<span> — </span>
						<TextField
							placeholder="15:00"
							label="end"
							id="endTime"
							variant="outlined"
							sx={{
								width: "6rem",
								cursor: isReadOnly ? "not-allowed" : "pointer",
							}}
							InputProps={{
								readOnly: isReadOnly,
							}}
							{...register("endTime", {
								pattern: {
									value: /^([01]\d|2[0-3]):([0-5]\d)$/,
									message:
										"Введите время в формате HH:MM (00:00 - 23:59)",
								},
								validate: (value) => {
									return timeValidation(
										getValues("startTime"),
										value
									);
								},
							})}
						/>
						{errors.endTime && (
							<div className={styles.errorDiv}></div>
						)}
					</div>

					<FormControl sx={{ width: "10rem" }}>
						<InputLabel id="category-label-id">category</InputLabel>
						<Select
							label="category"
							labelId="category-label-id"
							defaultValue={task.category}
							value={category}
							sx={{ pointerEvents: isReadOnly ? "none" : "auto" }}
							{...register("category", {
								required: "Поле обязательно",
							})}
						>
							<MenuItem value={"Feature"}>Feature</MenuItem>
							<MenuItem value={"Bug"}>Bug</MenuItem>
							<MenuItem value={"Documentation"}>
								Documentation
							</MenuItem>
							<MenuItem value={"Refactor"}>Refactor</MenuItem>
							<MenuItem value={"Test"}>Test</MenuItem>
						</Select>
						{errors.category && (
							<div className={styles.errorDiv}></div>
						)}
					</FormControl>

					<FormControl sx={{ width: "10rem" }}>
						<InputLabel id="status-label-id">status</InputLabel>
						<Select
							label="status"
							labelId="status-label-id"
							defaultValue={task.status}
							value={status}
							sx={{ pointerEvents: isReadOnly ? "none" : "auto" }}
							{...register("status", {
								required: "Поле обязательно",
							})}
						>
							<MenuItem value={"To-do"}>To-do</MenuItem>
							<MenuItem value={"In Progress"}>
								In Progress
							</MenuItem>
							<MenuItem value={"Done"}>Done</MenuItem>
						</Select>
						{errors.status && (
							<div className={styles.errorDiv}></div>
						)}
					</FormControl>
				</div>

				<div className={styles.addForm__prioritesProgressContainer}>
					<div className={styles.addForm__prioritiesContainer}>
						<h3>priorities</h3>
						<div className={styles.addForm__prioritiesChoice}>
							<ButtonsParser
								aria-label="priorites button group"
								values={prioritesValues}
								action={prioritesHadndleChoice}
								template={(value, onClick) => (
									<button
										aria-label={value}
										type="button"
										style={{
											backgroundColor: `${getColroFromPriorities(
												value
											)}`,
											cursor: isReadOnly
												? "not-allowed"
												: "pointer",
										}}
										className={cn(
											styles.addForm__prioritesButton,
											{
												[styles.activeButtonPriorites]:
													priorites === value,
											}
										)}
										onClick={onClick}
									></button>
								)}
							/>
						</div>
					</div>

					<div className={styles.addForm__progressContainer}>
						<h3>progress</h3>
						<ButtonGroup
							variant="text"
							aria-label="Progress button group"
							sx={{
								"& .MuiButtonGroup-grouped:not(:last-of-type)":
									{
										borderRight:
											"1px solid var(--grey-color)",
									},
							}}
						>
							<ButtonsParser
								values={progressValues}
								action={prorgessHandleChoise}
								template={(value, onClick) => (
									<Button
										sx={{
											color: `var(--black-color)`,
											fontSize: "var(--small-font-size)",
											cursor: isReadOnly
												? "not-allowed"
												: "pointer",
										}}
										className={cn({
											[styles.activeButtonProgress]:
												progress ===
												parseInt(
													value.slice(0, -1),
													10
												),
										})}
										onClick={onClick}
									>
										{value}
									</Button>
								)}
							/>
						</ButtonGroup>
					</div>
				</div>

				<TextField
					label="content"
					variant={!isReadOnly ? "outlined" : "standard"}
					multiline
					fullWidth
					InputProps={{
						readOnly: isReadOnly,
					}}
					{...register("content")}
				/>

				<Divider
					style={{
						marginTop: "2rem",
						backgroundColor: "var(--grey-color)",
						display: isReadOnly ? "none" : "block",
					}}
				/>

				<div
					className={styles.addForm__buttonsContainer}
					style={{ display: isReadOnly ? "none" : "flex" }}
				>
					<ButtonBordered
						type="submit"
						sx={{
							cursor: isReadOnly ? "not-allowed" : "pointer",
							color: "var(--high-priorites-color)",
						}}
						onClick={onDelete}
					>
						delete task
					</ButtonBordered>
					<ButtonBordered
						onClick={() => !isReadOnly && onReset()}
						sx={{ cursor: isReadOnly ? "not-allowed" : "pointer" }}
					>
						reset
					</ButtonBordered>
					<ButtonFilled
						type="submit"
						sx={{ cursor: isReadOnly ? "not-allowed" : "pointer",
							 	'@media (max-width: 425px)': {
                        			width: '100%',
                        			marginBottom: '2rem',
                    		}, 
						}}
					>
						save changes
					</ButtonFilled>
				</div>
			</form>
		</div>
	);
};

export default TaskDetailesForm;
