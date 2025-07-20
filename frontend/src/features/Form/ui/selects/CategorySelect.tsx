import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import type { FC } from "react";

type Props = InputProps & {
	defaultValue?: string | undefined;
	value: string;
	onChange?: (value: string) => void;
};

const CategorySelect: FC<Props> = ({
	sx,
	value,
	defaultValue,
	register,
	subContent,
}) => {
	return (
		<FormControl sx={sx}>
			<InputLabel id="category-label-id">category</InputLabel>
			<Select
				label="category"
				labelId="category-label-id"
				value={value}
				defaultValue={defaultValue}
				{...register}
			>
				<MenuItem value={"Feature"}>Feature</MenuItem>
				<MenuItem value={"Bug"}>Bug</MenuItem>
				<MenuItem value={"Documentation"}>Documentation</MenuItem>
				<MenuItem value={"Refactor"}>Refactor</MenuItem>
				<MenuItem value={"Test"}>Test</MenuItem>
			</Select>
			{subContent}
		</FormControl>
	);
};

export default CategorySelect;
