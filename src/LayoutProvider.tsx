import { Route, Routes } from "react-router-dom";
import TaskList from "./components/pages/TaskList_(Main)/TaskList";
import Layout from "./Layout";

export default function LayoutProvider() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<TaskList />} />
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
