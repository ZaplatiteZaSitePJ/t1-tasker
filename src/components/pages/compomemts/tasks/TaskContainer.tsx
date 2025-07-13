import React from "react";
import styles from "./TaskContainer.module.scss";
import type { TaskProps } from "./Task.interface";
import Task from "./Task";

const tasks: TaskProps[] = [
	{
		title: "Добавить поиск",
		description: "Реализовать функционал поиска по задачам.",
		category: "Feature",
		status: "To_do",
		priorites: "High",
		date: "2025-07-10",
		progress: 0,
	},
	{
		title: "Обновить README",
		description: "Добавить инструкции по запуску и структуре проекта.",
		category: "Documentation",
		status: "Done",
		priorites: "Low",
		date: "2025-06-20",
		progress: 100,
	},
	{
		title: "Исправить баг с логином",
		description:
			"При неверном пароле пользователь не получает сообщение об ошибке.",
		category: "Bug",
		status: "In_Progress",
		priorites: "High",
		date: "2025-07-05",
		progress: 45,
	},
	{
		title: "Рефакторинг хука useAuth",
		description:
			"Оптимизировать хук авторизации и убрать дублирование кода.",
		category: "Refactor",
		status: "To_do",
		priorites: "Medium",
		date: "2025-07-15",
		progress: 0,
	},
	{
		title: "Написать тесты для API",
		description:
			"Покрыть API-тестами методы авторизации и получения задач.",
		category: "Test",
		status: "To_do",
		priorites: "High",
		date: "2025-07-12",
		progress: 0,
	},
	{
		title: "Добавить фильтрацию",
		description:
			"Позволить пользователям фильтровать задачи по статусу и приоритету.",
		category: "Feature",
		status: "In_Progress",
		priorites: "Medium",
		date: "2025-07-11",
		progress: 60,
	},
	{
		title: "Документация API",
		description: "Описать эндпоинты API с примерами запросов и ответов.",
		category: "Documentation",
		status: "Done",
		priorites: "Medium",
		date: "2025-06-30",
		progress: 100,
	},
	{
		title: "Баг в отчете о задачах",
		description: "Некорректное отображение завершенных задач в отчете.",
		category: "Bug",
		status: "To_do",
		priorites: "High",
		date: "2025-07-13",
		progress: 0,
	},
	{
		title: "Оптимизировать загрузку",
		description: "Уменьшить время загрузки главной страницы приложения.",
		category: "Refactor",
		status: "In_Progress",
		priorites: "Medium",
		date: "2025-07-09",
		progress: 30,
	},
	{
		title: "Тесты формы входа",
		description: "Добавить юнит-тесты для формы авторизации пользователя.",
		category: "Test",
		status: "Done",
		priorites: "Low",
		date: "2025-07-08",
		progress: 100,
	},
];

export default function TaskContainer() {
	return (
		<div className={styles.taskContainer}>
			{tasks.map((task) => (
				<Task
					title={task.title}
					description={task.description}
					priorites={task.priorites}
					status={task.status}
					progress={task.progress}
					category={task.category}
					date={task.date}
				/>
			))}
		</div>
	);
}
