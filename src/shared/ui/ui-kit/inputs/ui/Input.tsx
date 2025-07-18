import { FormControl, TextField } from "@mui/material";
import type { InputProps  } from "../types";
import type { FC } from "react";

const Input: FC<InputProps > = ({ register, label, variant, fullWidth, sx, subContent }) => {
  return (
    <FormControl>
      <TextField
        label={label}
        variant={variant}
        fullWidth={!!fullWidth}
        sx={sx}
        {...register}
      />
      {subContent}
    </FormControl>
  );
}

export default Input