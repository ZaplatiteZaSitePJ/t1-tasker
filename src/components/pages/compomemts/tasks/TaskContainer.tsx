import React from "react";
import styles from "./TaskContainer.module.scss";
import type { TaskProps } from "./Task.interface";
import Task from "./Task";

const tasks: TaskProps[] = [
	{
		id: 0,
		title: "Добавить поиск",
		description: "Реализовать функционал поиска по задачам.",
		category: "Feature",
		status: "To-do",
		priorites: "High",
		startTime: "12:30",
		endTime: "15:30",
		progress: 0,
	},
	{
		id: 1,
		title: "Обновить README",
		description: "Добавить инструкции по запуску и структуре проекта.",
		category: "Documentation",
		status: "Done",
		priorites: "Low",
		startTime: "12:30",
		endTime: "15:30",
		progress: 100,
	},
	{
		id: 2,
		title: "Исправить баг с логином",
		description:
			"При неверном пароле пользователь не получает сообщение об ошибке.",
		category: "Bug",
		status: "In Progress",
		priorites: "High",
		startTime: "12:30",
		endTime: "15:30",
		progress: 45,
	},
	{
		id: 3,
		title: "Рефакторинг хука useAuth",
		description:
			"Оптимизировать хук авторизации и убрать дублирование кода.",
		category: "Refactor",
		status: "To-do",
		priorites: "Medium",
		startTime: "12:30",
		endTime: "15:30",
		progress: 0,
	},
	{
		id: 4,
		title: "Написать тесты для API",
		description:
			"Покрыть API-тестами методы авторизации и получения задач.",
		category: "Test",
		status: "To-do",
		priorites: "High",
		startTime: "12:30",
		endTime: "15:30",
		progress: 0,
	},
	{
		id: 5,
		title: "Добавить фильтрацию",
		description:
			"Позволить пользователям фильтровать задачи по статусу и приоритету.",
		category: "Feature",
		status: "In Progress",
		priorites: "Medium",
		startTime: "12:30",
		endTime: "15:30",
		progress: 60,
	},
	{
		id: 6,
		title: "Документация API",
		description: "Описать эндпоинты API с примерами запросов и ответов.",
		category: "Documentation",
		status: "Done",
		priorites: "Medium",
		startTime: "12:30",
		endTime: "15:30",
		progress: 100,
	},
	{
		id: 7,
		title: "Баг в отчете о задачах",
		description: "Некорректное отображение завершенных задач в отчете.",
		category: "Bug",
		status: "To-do",
		priorites: "High",
		startTime: "12:30",
		endTime: "15:30",
		progress: 0,
	},
	{
		id: 8,
		title: "Оптимизировать загрузку",
		description: "Уменьшить время загрузки главной страницы приложения.",
		category: "Refactor",
		status: "In Progress",
		priorites: "Medium",
		startTime: "12:30",
		endTime: "15:30",
		progress: 30,
	},
	{
		id: 9,
		title: "Тесты формы входа",
		description: "Добавить юнит-тесты для формы авторизации пользователя.",
		category: "Test",
		status: "Done",
		priorites: "Low",
		startTime: "12:30",
		endTime: "15:30",
		progress: 100,
	},
];

export default function TaskContainer() {
	return (
		<div className={styles.taskContainer}>
			{tasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					title={task.title}
					description={task.description}
					priorites={task.priorites}
					status={task.status}
					progress={task.progress}
					category={task.category}
					startTime={task.startTime}
					endTime={task.endTime}
				/>
			))}
		</div>
	);
}
