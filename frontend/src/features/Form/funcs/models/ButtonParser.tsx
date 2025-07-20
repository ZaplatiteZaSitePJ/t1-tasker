import type { FC } from "react";
import type { ReactNode } from "react";

type ButtonsParserProps = {
	values: Array<string>;
	template: (value: string, onClick: () => void) => ReactNode;
	action: (value: string) => void;
};

/**
 * Универсальный компонент для отображения набора кнопок для имимтации селекторов
 * на основе переданного массива значений и шаблона отображения.
 *
 * `template`, чтобы отрисовать каждый элемент,
 * `action` как обработчик клика.
 */

const ButtonsParser: FC<ButtonsParserProps> = ({
	values,
	template,
	action,
}) => {
	return (
		<>
			{values.map((value) => {
				return template(value, () => action(value));
			})}
		</>
	);
};

export default ButtonsParser;
