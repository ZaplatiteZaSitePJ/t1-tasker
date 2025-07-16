import type { FC } from "react";
import type { ReactNode } from "react";

type ButtonsParserProps = {
	values: Array<string>;
	template: (value: string, onClick: () => void) => ReactNode;
	action: (value: string) => void;
};

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
