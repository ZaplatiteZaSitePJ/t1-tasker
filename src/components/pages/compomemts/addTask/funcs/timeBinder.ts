const timeBinder = (time: string) => {
	if (time) {
		return `${time}`;
	}
	return "None";
};

export default timeBinder;
