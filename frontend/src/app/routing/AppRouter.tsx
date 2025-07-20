import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Main from "@pages/main/ui/Main";
import { Layout } from "@shared/ui/layouts";
import TaskDetailes from "@pages/taskDetailes/ui/TaskDetailes";
import { tasksLoader } from "@features/Tasks/api/fetch/tasksLoader";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Main />} loader={tasksLoader} />
			<Route path="tasks/:id" element={<TaskDetailes />} />
			<Route
				path="visualisation"
				element={
					<p>Не имеет отношения к дз, хочу позже сделать для себя</p>
				}
			/>
			<Route
				path="board"
				element={
					<p>Не имеет отношения к дз, хочу позже сделать для себя</p>
				}
			/>
		</Route>
	)
);

export default router;
