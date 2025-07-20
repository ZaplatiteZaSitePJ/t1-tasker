import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const TitleInput: FC<InputProps> = ({
	register,
	sx,
	subContent,
	isAvailable = true,
}) => {
	return (
		<Input
			label="title"
			variant="standard"
			register={register}
			fullWidth
			isAvailable={isAvailable}
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default TitleInput;
