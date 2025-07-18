import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const EndTimeInput: FC<InputProps> = ({
	register,
	sx,
	subContent,
	isAvailable,
}) => {
	return (
		<Input
			placeholder="15:30"
			label="start"
			id="startTime"
			variant="outlined"
			register={register}
			sx={sx}
			subContent={subContent}
			isAvailable={isAvailable}
		/>
	);
};

export default EndTimeInput;
