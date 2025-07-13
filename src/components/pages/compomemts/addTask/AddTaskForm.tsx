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

export default function AddTaskForm() {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskProps>({ defaultValues: { priorites: "High" } });

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
					<ul className={styles.addForm__prioritiesChoice}>
						<li>
							<button
								type="button"
								style={{
									backgroundColor: `var(--high-priorites-color)`,
								}}
								className={cn(styles.addForm__prioritesButton, {
									[styles.activeButton]:
										getValues("priorites") === "High",
								})}
							></button>
						</li>
						<li>
							<button
								type="button"
								style={{
									backgroundColor: `var(--medium-priorites-color)`,
								}}
								className={cn(styles.addForm__prioritesButton, {
									[styles.activeButton]:
										getValues("priorites") === "Medium",
								})}
							></button>
						</li>
						<li>
							<button
								type="button"
								style={{
									backgroundColor: `var(--low-priorites-color)`,
								}}
								className={cn(styles.addForm__prioritesButton, {
									[styles.activeButton]:
										getValues("priorites") === "Low",
								})}
							></button>
						</li>
					</ul>
				</div>

				<div className={styles.addForm__progressContainer}>
					<h3>progress</h3>
					<ButtonGroup
						variant="text"
						aria-label="Basic button group"
						sx={{
							"& .MuiButtonGroup-grouped:not(:last-of-type)": {
								borderRight: "1px solid var(--grey-color)",
							},
						}}
					>
						<Button sx={{ color: `var(--black-color)` }}>0%</Button>
						<Button sx={{ color: `var(--black-color)` }}>
							25%
						</Button>
						<Button sx={{ color: `var(--black-color)` }}>
							50%
						</Button>
						<Button sx={{ color: `var(--black-color)` }}>
							75%
						</Button>
						<Button sx={{ color: `var(--black-color)` }}>
							100%
						</Button>
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
