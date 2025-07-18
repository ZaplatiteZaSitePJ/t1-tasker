import { Route, Routes } from "react-router-dom";
import Main from "@pages/main/ui/Main";
import { Layout } from "@shared/ui/layouts";
import TaskDetailes from "@pages/taskDetailes/ui/TaskDetailes";

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="tasks/:id" element={<TaskDetailes />} />
				<Route
					path="/visualisation"
					element={
						<p>
							Не имеет отношения к дз, хочу позже сделать для себя
						</p>
					}
				/>
				<Route
					path="/board"
					element={
						<p>
							Не имеет отношения к дз, хочу позже сделать для себя
						</p>
					}
				/>
			</Route>
		</Routes>
	);
}
