/**
 * Проверяет, что время окончания (`endTime`) не меньше времени начала (`startTime`).
 *
 * Если одно из полей пустое — валидация пропускается.
 * Если `endTime` меньше `startTime`, возвращается строка ошибки.\
 */

export const timeValidation = (startTime: string, endTime: string) => {
	if (startTime === "" || endTime === "") return true;

	const [startH, startM] = startTime.split(":").map(Number);
	const [endH, endM] = endTime.split(":").map(Number);

	if (startH > endH || (startH === endH && startM > endM)) {
		return "error: end time less than start time";
	}
	return true;
};
