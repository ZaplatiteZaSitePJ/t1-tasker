import { type FC } from "react";
import styles from "./ProgressSelect.module.scss";
import ButtonsParser from "@features/Form/funcs/models/ButtonParser";
import { Button, ButtonGroup } from "@mui/material";
import cn from "classnames";

const options = ["0%", "25%", "50%", "75%", "100%"];

type PrioritiesProps = {
	action: (value: number | string) => void;
	progress: number;
};

const ProgressSelect: FC<PrioritiesProps> = ({ progress, action }) => {
	return (
		<ButtonGroup
			variant="text"
			aria-label="progress button group"
			sx={{
				"& .MuiButtonGroup-grouped:not(:last-of-type)": {
					borderRight: "1px solid var(--grey-color)",
				},
			}}
		>
			<ButtonsParser
				aria-label="progress button group"
				values={options}
				action={action}
				template={(value, onClick) => (
					<Button
						sx={{
							color: `var(--black-color)`,
							fontSize: "var(--small-font-size)",
						}}
						className={cn({
							[styles.activeButtonProgress]:
								progress === parseInt(value.slice(0, -1), 10),
						})}
						onClick={onClick}
					>
						{value}
					</Button>
				)}
			/>
		</ButtonGroup>
	);
};

export default ProgressSelect;
