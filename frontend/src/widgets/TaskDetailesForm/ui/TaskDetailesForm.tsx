import styles from "./TaskDetailesForm.module.scss";
import { useForm } from "react-hook-form";
import type { TaskProps } from "@shared/types/Task.interface";
import { Divider } from "@mui/material";
import { ButtonBordered } from "@shared/ui/ui-kit";
import { ButtonFilled } from "@shared/ui/ui-kit";
import type { Priorites } from "@shared/types/Priopites.type";
import { timeValidation } from "@features/lib";
import { useEffect, type FC } from "react";
import type { TaskDetaileFormProps } from "./TaskDetailesForm.type";
import { useLoaderData, useNavigate } from "react-router-dom";
import { titleOption } from "@features/Form/ui/options/Title.options";
import TitleInput from "@features/Form/ui/inputs/TitleInput";
import DescriptionInput from "@features/Form/ui/inputs/DescriptionInput";
import { descriptionOptions } from "@features/Form/ui/options/Description.options";
import StartTimeInput from "@features/Form/ui/inputs/StartTimeInput";
import { timeOptions } from "@features/Form/ui/options/Time.options";
import EndTimeInput from "@features/Form/ui/inputs/EndTimeInput";
import CategorySelect from "@features/Form/ui/selects/CategorySelect";
import StatusSelect from "@features/Form/ui/selects/StatusSelect";
import PrioritiesSelect from "@features/Form/ui/selects/PrioritiesSelect";
import ProgressSelect from "@features/Form/ui/selects/ProgressSelect";
import ContentInput from "@features/Form/ui/inputs/ContentInput";
import { useAppDispatch } from "@features/Tasks/api/storeModel/hooks";
import {
	deleteTaskTH,
	updateTaskTH,
} from "@features/Tasks/api/storeModel/tasks.thunk";
const TaskDetailesForm: FC<TaskDetaileFormProps> = ({
	isReadOnly,
	setReadonly,
}) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<TaskProps>();

	const task = useLoaderData();

	useEffect(() => {
		if (task) {
			reset(task);
		}
	}, [task, reset]);

	const status = watch("status");
	const category = watch("category");

	const priorites = watch("priorites");
	const prioritesHadndleChoice = (value: string) => {
		if (!isReadOnly) {
			setValue("priorites", value as Priorites);
			console.log(value);
		}
	};

	const progress = watch("progress");
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

	const onDelete = async () => {
		if (!isReadOnly) {
			try {
				await dispatch(deleteTaskTH(task.id));
				navigate("/");
			} catch (error) {
				console.error("Error update task: ", error);
			}
		}
	};

	const onSubmit = async () => {
		if (!isReadOnly) {
			const newTask = {
				...getValues(),
			};

			try {
				await dispatch(updateTaskTH(newTask));
				navigate("/");
			} catch (error) {
				console.error("Error update task: ", error);
			}
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
				<TitleInput
					sx={{
						"& .MuiInputBase-input": {
							fontSize: "1.5rem",
							fontWeight: "bold",
						},
					}}
					isAvailable={!isReadOnly}
					register={register("title", titleOption)}
					subContent={
						<>
							{!isReadOnly && (
								<p className={styles.subInfo}>5 - 30 symbols</p>
							)}
							{errors.title && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<DescriptionInput
					register={register("description", descriptionOptions)}
					sx={{
						"& .MuiInputBase-input": {
							fontSize: "var(--normal-font-size)",
							fontWeight: "normal",
						},
					}}
					isAvailable={!isReadOnly}
					subContent={
						<>
							{!isReadOnly && (
								<p className={styles.subInfo}>
									{"<"} 100 symbols
								</p>
							)}
							{errors.description && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<div className={styles.addForm__inputsContainer}>
					<div className={styles.addForm__dateContainer}>
						{errors.startTime && (
							<div className={styles.errorDiv}></div>
						)}

						<StartTimeInput
							register={register("startTime", timeOptions)}
							sx={{
								width: "6rem",
								cursor: isReadOnly ? "not-allowed" : "pointer",
							}}
							isAvailable={!isReadOnly}
						/>

						<span> — </span>

						<EndTimeInput
							register={register("endTime", {
								...timeOptions,
								validate: (value) => {
									return timeValidation(
										getValues("startTime"),
										value
									);
								},
							})}
							sx={{
								width: "6rem",
								cursor: isReadOnly ? "not-allowed" : "pointer",
							}}
							isAvailable={!isReadOnly}
						/>

						{errors.endTime && (
							<div className={styles.errorDiv}></div>
						)}
					</div>

					<CategorySelect
						value={category}
						defaultValue={task?.category}
						sx={{
							width: "10rem",
							pointerEvents: isReadOnly ? "none" : "auto",
						}}
						register={{
							...register("category", {
								required: "Поле обязательно",
							}),
						}}
						subContent={
							<>
								{errors.category && (
									<div className={styles.errorDiv}></div>
								)}
							</>
						}
					/>

					<StatusSelect
						sx={{
							width: "10rem",
							pointerEvents: isReadOnly ? "none" : "auto",
						}}
						value={status}
						defaultValue={task?.status}
						register={{
							...register("status", {
								required: "Поле обязательно",
							}),
						}}
						subContent={
							<>
								{errors.status && (
									<div className={styles.errorDiv}></div>
								)}
							</>
						}
					/>
				</div>

				<div className={styles.addForm__prioritesProgressContainer}>
					<div className={styles.addForm__prioritiesContainer}>
						<h3>priorities</h3>
						<PrioritiesSelect
							isAvailable={!isReadOnly}
							priorites={priorites}
							action={prioritesHadndleChoice}
						/>
					</div>

					<div className={styles.addForm__progressContainer}>
						<h3>progress</h3>
						<ProgressSelect
							isAvailable={!isReadOnly}
							progress={progress}
							action={prorgessHandleChoise}
						/>
					</div>
				</div>

				<ContentInput
					register={register("content")}
					isAvailable={!isReadOnly}
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
							color: "var(--high-priorites-color)",
						}}
						onClick={onDelete}
					>
						delete task
					</ButtonBordered>
					<ButtonBordered onClick={() => onReset()}>
						reset
					</ButtonBordered>
					<ButtonFilled
						type="submit"
						sx={{
							"@media (max-width: 425px)": {
								width: "100%",
								marginBottom: "2rem",
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
