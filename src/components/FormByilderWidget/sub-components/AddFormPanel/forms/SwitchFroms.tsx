import React, { type FC } from "react";
import TextfieldForm from "./TextfieldForm";
import SelectForm from "./SelectForm";
import CheckboxForm from "./CheckboxForm";
import type { ChoosenFormElementType } from "../../../types/choosenFormElementType";

type SwitchFormsProps = {
    activeId: ChoosenFormElementType;
};

const SwitchForms: FC<SwitchFormsProps> = ({activeId}) => {

    switch (activeId) {
        case "textfield":
            return (
                <TextfieldForm />
            )
        case "select":
            return (
                <SelectForm />
            )
        case "checkbox":
            return (
                <CheckboxForm />
            )
        default:
            break;
    }
}

export default SwitchForms