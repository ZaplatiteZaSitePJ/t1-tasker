import styles from "./AddTaskForm.module.scss";
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
} from "@mui/material";
import ButtonBordered from "../../../../ui/buttons/ButtonBordered";
import ButtonFilled from "../../../../ui/buttons/ButtonFilled";
import ButtonsParser from "./funcs/ButtonsParser";
import type { Priorites } from "../../../../../types/Priopites.type";
import getColroFromPriorities from "../../../../../funcs/getColorFromPriorities";
import { addTask } from "../../../../../funcs/localStorage_api/addTask";
import { timeValidation } from "../../../../../funcs/validation/timeValidation";
import { useTasks } from "../../../../../context/TasksContext";
import { getAllTasks } from "../../../../../funcs/localStorage_api/getAllTasks";

export default function AddTaskForm() {
	const { changeTasks } = useTasks();

	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<TaskProps>({
		defaultValues: { priorites: "High", progress: 0, status: "To-do", category: "Bug" },
	});

	const status = watch("status");
	const category = watch("category");

	const priorites = watch("priorites");
	const prioritesValues = ["High", "Medium", "Low"];
	const prioritesHadndleChoice = (value: string) => {
		setValue("priorites", value as Priorites);
		console.log(value);
	};

	const progress = watch("progress");
	const progressValues = ["0%", "25%", "50%", "75%", "100%"];
	const prorgessHandleChoise = (value: number | string) => {
		if (typeof value === "string") {
			const numValue = parseInt(value.slice(0, -1), 10);
			setValue("progress", numValue);
			console.log(value);
		}
	};

	const onSubmit = () => {
		const newTask = {
			...getValues(),
			id: Math.floor(Math.random() * (10 - 5000 + 1)) + 10,
		};

		addTask(newTask);
		const updatedTasks = getAllTasks();
		changeTasks(updatedTasks);
		reset();
	};

	return (
		<div className={styles.container}>
			<h2>Add Task</h2>
			<form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
					<TextField
						label="title"
						variant="standard"
						fullWidth
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
					<p className={styles.subInfo}>5 - 30 symbols</p>
					{errors.title && <div className={styles.errorDiv}></div>}
				</FormControl>

				<FormControl>
					<TextField
						label="description"
						variant="standard"
						multiline
						fullWidth
						{...register("description", {
							maxLength: {
								value: 100,
								message: "description max size is 100 symbols",
							},
						})}
					/>
					<p className={styles.subInfo}>{"<"} 100 symbols</p>
					{errors.description && (
						<div className={styles.errorDiv}></div>
					)}
				</FormControl>

				<FormControl sx={{ width: "10rem", margin: "0 auto" }}>
					<InputLabel id="category-label-id">category</InputLabel>
					<Select
						label="category"
						labelId="category-label-id"
						value={category}
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
					{errors.category && <div className={styles.errorDiv}></div>}
				</FormControl>

				<FormControl sx={{ width: "10rem", margin: "0 auto" }}>
					<InputLabel id="status-label-id">status</InputLabel>
					<Select
						label="status"
						labelId="status-label-id"
						value={status}
						{...register("status", {
							required: "Поле обязательно",
						})}
					>
						<MenuItem value={"To-do"}>To-do</MenuItem>
						<MenuItem value={"In Progress"}>In Progress</MenuItem>
						<MenuItem value={"Done"}>Done</MenuItem>
					</Select>
					{errors.status && <div className={styles.errorDiv}></div>}
				</FormControl>

				<div className={styles.addForm__dateContainer}>
					{errors.startTime && (
						<div className={styles.errorDiv}></div>
					)}
					<TextField
						placeholder="12:30"
						label="start"
						id="startTime"
						variant="outlined"
						sx={{ width: "4.5rem" }}
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
						sx={{ width: "4.5rem" }}
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
					{errors.endTime && <div className={styles.errorDiv}></div>}
				</div>

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
							"& .MuiButtonGroup-grouped:not(:last-of-type)": {
								borderRight: "1px solid var(--grey-color)",
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
									}}
									className={cn({
										[styles.activeButtonProgress]:
											progress ===
											parseInt(value.slice(0, -1), 10),
									})}
									onClick={onClick}
								>
									{value}
								</Button>
							)}
						/>
					</ButtonGroup>
				</div>

				<TextField
					label="content"
					variant="standard"
					multiline
					fullWidth
					{...register("content")}
				/>

				<div className={styles.addForm__buttonsContainer}>
					<ButtonBordered onClick={() => reset()}>
						reset
					</ButtonBordered>
					<ButtonFilled type="submit">add</ButtonFilled>
				</div>
			</form>
		</div>
	);
}
