import { type FC } from "react";
import styles from "./PrioritiesSelect.module.scss";
import ButtonsParser from "@features/Form/funcs/models/ButtonParser";
import { getColroFromPriorities } from "@features/lib";
import cn from "classnames";

const options = ["High", "Medium", "Low"];

type PrioritiesProps = {
	action: (value: string) => void;
	priorites: string;
	isAvailable?: boolean;
};

const PrioritiesSelect: FC<PrioritiesProps> = ({
	priorites,
	action,
	isAvailable = true,
}) => {
	return (
		<div className={styles.prioritiesChoice}>
			<ButtonsParser
				aria-label="priorites button group"
				values={options}
				action={action}
				template={(value, onClick) => (
					<button
						aria-label={value}
						type="button"
						style={{
							backgroundColor: `${getColroFromPriorities(value)}`,
						}}
						className={cn(styles.prioritesButton, {
							[styles.activeButton]: priorites === value,
							[styles.notAvailable]: isAvailable === false,
						})}
						onClick={onClick}
					></button>
				)}
			/>
		</div>
	);
};

export default PrioritiesSelect;
