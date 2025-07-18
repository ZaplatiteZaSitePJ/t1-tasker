import { FormControl, TextField } from "@mui/material";
import type { InputProps } from "../types";
import type { FC } from "react";

const Input: FC<InputProps> = ({
	register,
	label,
	variant,
	fullWidth,
	multiline,
	sx,
	subContent,
	isAvailable,
}) => {
	return (
		<FormControl>
			<TextField
				label={label}
				variant={variant}
				InputProps={{ readOnly: !isAvailable }}
				fullWidth={!!fullWidth}
				multiline={!!multiline}
				sx={sx}
				{...register}
			/>
			{subContent}
		</FormControl>
	);
};

export default Input;
