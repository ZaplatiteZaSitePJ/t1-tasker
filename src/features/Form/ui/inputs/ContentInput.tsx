import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const ContentInput: FC<InputProps> = ({ register, isAvailable = true }) => {
	return (
		<Input
			label="content"
			variant="standard"
			multiline
			fullWidth
			register={register}
			isAvailable={isAvailable}
		/>
	);
};

export default ContentInput;
