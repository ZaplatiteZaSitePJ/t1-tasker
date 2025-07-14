import { TasksProvider } from "./context/TasksContext";
import LayoutProvider from "./LayoutProvider";

function App() {
	return (
		<TasksProvider>
			<LayoutProvider />
		</TasksProvider>
	);
}

export default App;
