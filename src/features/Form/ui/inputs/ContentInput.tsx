import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const ContentInput: FC<InputProps> = ({ register }) => {
	return (
		<Input
			label="content"
			variant="standard"
			multiline
			fullWidth
			register={register}
		/>
	);
};

export default ContentInput;
