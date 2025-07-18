import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const DescriptionInput: FC<InputProps> = ({
	register,
	sx,
	subContent,
	isAvailable = true,
}) => {
	return (
		<Input
			label="description"
			variant="standard"
			register={register}
			fullWidth
			multiline
			isAvailable={isAvailable}
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default DescriptionInput;
