export const tasksLoader = async () => {
	const res = await fetch("http://localhost:3000/tasks");
	console.log(res);
	if (!res.ok) throw new Error("Failed to load tasks");
	return res.json();
};
