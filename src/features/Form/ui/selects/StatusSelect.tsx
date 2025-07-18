import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import type { FC } from "react";

type Props = InputProps & {
	value: string;
	onChange?: (value: string) => void;
};

const StatusSelect: FC<Props> = ({ sx, value, register, subContent }) => {
	return (
		<FormControl sx={sx}>
			<InputLabel id="status-label-id">status</InputLabel>
			<Select
				label="status"
				labelId="status-label-id"
				value={value}
				{...register}
			>
				<MenuItem value={"To-do"}>To-do</MenuItem>
				<MenuItem value={"In Progress"}>In Progress</MenuItem>
				<MenuItem value={"Done"}>Done</MenuItem>
			</Select>
			{subContent}
		</FormControl>
	);
};

export default StatusSelect;
