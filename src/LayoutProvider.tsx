import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Layout from "./Layout";

export default function LayoutProvider() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
			</Route>
		</Routes>
	);
}
