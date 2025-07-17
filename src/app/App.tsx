import { TasksProvider } from "./context/TasksContext";
import { AppRouter } from "@app/routing";
function App() {
	return (
		<TasksProvider>
			<AppRouter />
		</TasksProvider>
	);
}

export default App;
