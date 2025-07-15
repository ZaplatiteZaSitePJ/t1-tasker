import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/TaskList_(Main)/Main";
import Layout from "./Layout";
import TaskDetailes from "./components/pages/TaskList_(Main)/components/taskDetailes/TaskDetailes";

export default function LayoutProvider() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path=":id" element={<TaskDetailes />} />
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
