import styles from "./AddTaskForm.module.scss";
import { useForm } from "react-hook-form";
import type { TaskProps } from "@shared/types/Task.interface";
import { ButtonBordered } from "@shared/ui/ui-kit";
import { ButtonFilled } from "@shared/ui/ui-kit";
import type { Priorites } from "@shared/types/Priopites.type";
import { addTaskTH } from "@features/Tasks/api/storeModel/tasks.thunk";
import TitleInput from "@features/Form/ui/inputs/TitleInput";
import { titleOption } from "@features/Form/ui/options/Title.options";
import DescriptionInput from "@features/Form/ui/inputs/DescriptionInput";
import { descriptionOptions } from "@features/Form/ui/options/Description.options";
import CategorySelect from "@features/Form/ui/selects/CategorySelect";
import StatusSelect from "@features/Form/ui/selects/StatusSelect";
import StartTimeInput from "@features/Form/ui/inputs/StartTimeInput";
import { timeOptions } from "@features/Form/ui/options/Time.options";
import EndTimeInput from "@features/Form/ui/inputs/EndTimeInput";
import PrioritiesSelect from "@features/Form/ui/selects/PrioritiesSelect";
import ProgressSelect from "@features/Form/ui/selects/ProgressSelect";
import ContentInput from "@features/Form/ui/inputs/ContentInput";
import type { FC } from "react";
import type { ModalProps } from "@shared/ui/modals/type/Modals.type";
import { useAppDispatch } from "@features/Tasks/api/storeModel/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { getDate } from "@features/lib/getDate";
import { timeValidation } from "@features/lib";

const AddTaskForm: FC<ModalProps> = ({ onClose }) => {
	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<TaskProps>({
		defaultValues: {
			priorites: "High",
			progress: 0,
			status: "To-do",
			category: "Bug",
		},
	});

	const status = watch("status");
	const category = watch("category");

	const priorites = watch("priorites");
	const prioritesHadndleChoice = (value: string) => {
		setValue("priorites", value as Priorites);
		console.log(value);
	};

	const progress = watch("progress");
	const prorgessHandleChoise = (value: number | string) => {
		if (typeof value === "string") {
			const numValue = parseInt(value.slice(0, -1), 10);
			setValue("progress", numValue);
			console.log(value);
		}
	};

	const dispatch = useAppDispatch();

	const onSubmit = async () => {
		const newTask = { ...getValues(), id: nanoid(), createdAt: getDate() };

		try {
			await dispatch(addTaskTH(newTask)).unwrap();
			reset();
			onClose?.();
		} catch (error) {
			console.error("Error task creating: ", error);
		}
	};

	return (
		<div className={styles.container}>
			<h2>Add Task</h2>
			<form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
				<TitleInput
					register={register("title", titleOption)}
					subContent={
						<>
							<p className={styles.subInfo}>5 - 30 symbols</p>
							{errors.title && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<DescriptionInput
					register={register("description", descriptionOptions)}
					subContent={
						<>
							<p className={styles.subInfo}>{"<"} 100 symbols</p>
							{errors.description && (
								<div className={styles.errorDiv}></div>
							)}
						</>
					}
				/>

				<CategorySelect
					value={category}
					sx={{ width: "fit-content", margin: "0 auto" }}
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
					value={status}
					sx={{
						width: "fit-content",
						margin: "0 auto",
					}}
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

				<div className={styles.addForm__dateContainer}>
					{errors.startTime && (
						<div className={styles.errorDiv}></div>
					)}

					<StartTimeInput
						register={register("startTime", timeOptions)}
						sx={{ width: "5rem" }}
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
						sx={{ width: "5rem" }}
					/>
					{errors.endTime && <div className={styles.errorDiv}></div>}
				</div>

				<div className={styles.addForm__prioritiesContainer}>
					<h3>priorities</h3>

					<PrioritiesSelect
						priorites={priorites}
						action={prioritesHadndleChoice}
					/>
				</div>

				<div className={styles.addForm__progressContainer}>
					<h3>progress</h3>

					<ProgressSelect
						progress={progress}
						action={prorgessHandleChoise}
					/>
				</div>

				<ContentInput register={register("content")} />

				<div className={styles.addForm__buttonsContainer}>
					<ButtonBordered onClick={() => reset()}>
						reset
					</ButtonBordered>
					<ButtonFilled type="submit">add</ButtonFilled>
				</div>
			</form>
		</div>
	);
};

export default AddTaskForm;
