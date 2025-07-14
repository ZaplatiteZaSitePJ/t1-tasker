import React from "react";
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
import ButtonBordered from "../../../ui/buttons/ButtonBordered";
import ButtonFilled from "../../../ui/buttons/ButtonFilled";
import ButtonsParser from "./ButtonsParser";
import type { Priorites } from "../../../../types/Priopites.type";
import getColroFromPriorities from "../../../../funcs/getColorFromPriorities";

export default function AddTaskForm() {
	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<TaskProps>({ defaultValues: { priorites: "High" } });

	const prioritesValues = ["High", "Medium", "Low"]

	const prioritesHadndleChoice = (value: string) => {
		setValue('priorites', value as Priorites)
		console.log(value)
	}

	const progressValues = ["0%", "25%", "50%", "75%", "100%"]

	const prorgessHandleChoise = (value: number | string) => {
		if(typeof value === 'string') {
			let numValue = parseInt(value.slice(0, -1), 10)
		    setValue('progress', numValue)
			console.log(value)
		}
	}

	let priorites = watch('priorites')

	let progress = watch('progress')

	return (
		<div className={styles.container}>
			<h2>Add Task</h2>
			<form className={styles.addForm}>
				<TextField
					label="title"
					variant="standard"
					fullWidth
					{...register("title", {
						required: "Это поле обязательно",
						minLength: {
							value: 5,
							message: "Минимум 5 символа",
						},
					})}
				/>

				<TextField
					label="description"
					variant="standard"
					fullWidth
					{...register("description")}
				/>

				<FormControl sx={{ width: "10rem", margin: "0 auto" }}>
					<InputLabel id="category-label-id">category</InputLabel>
					<Select
						label="category"
						labelId="category-label-id"
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
				</FormControl>

				<FormControl sx={{ width: "10rem", margin: "0 auto" }}>
					<InputLabel id="status-label-id">status</InputLabel>
					<Select
						label="status"
						labelId="status-label-id"
						{...register("status", {
							required: "Поле обязательно",
						})}
					>
						<MenuItem value={"To-do"}>To_do</MenuItem>
						<MenuItem value={"In_Progress"}>In_Progress</MenuItem>
						<MenuItem value={"Done"}>Done</MenuItem>
					</Select>
				</FormControl>

				<div className={styles.addForm__dateContainer}>
					<TextField
						label="start time"
						variant="standard"
						sx={{ width: "4.5rem" }}
					/>
					<span> — </span>
					<TextField
						label="end time"
						variant="standard"
						sx={{ width: "4.5rem" }}
					/>
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
										backgroundColor: `${getColroFromPriorities(value)}`,
									}}
									className={cn(styles.addForm__prioritesButton, {
										[styles.activeButtonPriorites]:
											priorites === value,
									})}
									onClick={onClick}
								></button>
                            )}
						/>
					</div>
				</div>

				<div className={styles.addForm__progressContainer}>
					<h3>progress</h3>
					<ButtonGroup variant="text"
						aria-label="Progress button group"
						sx={{
							"& .MuiButtonGroup-grouped:not(:last-of-type)": {
								borderRight: "1px solid var(--grey-color)",
							},
						}}>
						<ButtonsParser 
							values={progressValues} 
							action={prorgessHandleChoise}
							template={(value, onClick) => (
                                <Button sx={{ color: `var(--black-color)`, fontSize: "var(--small-font-size)" }}
									className={cn({[styles.activeButtonProgress]: progress === parseInt(value.slice(0, -1), 10)})}
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
					<ButtonBordered>reset</ButtonBordered>
					<ButtonFilled>add</ButtonFilled>
				</div>
			</form>
		</div>
	);
}
