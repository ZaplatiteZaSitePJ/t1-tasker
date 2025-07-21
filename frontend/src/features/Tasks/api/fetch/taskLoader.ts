import type { LoaderFunctionArgs } from "react-router-dom";
import type { TaskProps } from "@shared/types/Task.interface";

export const taskLoader = async ({ params }: LoaderFunctionArgs) => {
	const { id } = params;

	if (!id) throw new Error("Missing task ID");

	const res = await fetch(`http://localhost:3000/tasks/task/${id}`);
	console.log("FETCH RESPONSE", res);

	if (!res.ok) throw new Error("Failed to load task");

	const task: TaskProps = await res.json();
	return task;
};
