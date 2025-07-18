import type { TaskProps } from "@shared/types/Task.interface";
import type { ReactNode } from "react";
import type { FieldErrors } from "react-hook-form";
import type { UseFormRegisterReturn} from "react-hook-form";
import type { TextFieldProps } from "@mui/material/TextField";

export type InputProps = TextFieldProps & {
    register: UseFormRegisterReturn;
    subContent?: ReactNode
}