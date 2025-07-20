/**
 * Возвращает css-переменную цвета в соответствии с переданным приоритетом
 */

export function getColroFromPriorities(priorities: string) {
	priorities = priorities.toLowerCase();
	return `var(--${priorities}-priorites-color)`;
}
