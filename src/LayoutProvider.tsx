import { Route, Routes } from "react-router-dom";
import TaskList from "./components/pages/TaskList";
import Layout from "./Layout";

export default function LayoutProvider() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<TaskList />} />
			</Route>
		</Routes>
	);
}
