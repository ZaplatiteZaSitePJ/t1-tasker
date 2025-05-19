import React, { useEffect, useRef, type FC } from "react";
import TextfieldForm from "./TextfieldForm";
import styles from "../AddFormPanel.module.scss"
import SelectForm from "./SelectForm";
import CheckboxForm from "./CheckboxForm";
import type { ChoosenFormElementType } from "../../../types/choosenFormElementType";

type SwitchFormsProps = {
    activeId: ChoosenFormElementType;
};

const SwitchForms: FC<SwitchFormsProps> = ({activeId}) => {

    const elementsFormRef = useRef<HTMLDivElement | null>(null)
    const currentElemenRef = useRef<HTMLFormElement | null>(null)

    useEffect(():void => {
        const target = currentElemenRef?.current

        target?.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });

        console.log(currentElemenRef)
        
    }, [activeId])

    return (
        <div ref={elementsFormRef} className={styles.addFormPanel__elementsForm}>
            <TextfieldForm ref={activeId === "textfield" ? currentElemenRef : null} />
            <SelectForm ref={activeId === "select" ? currentElemenRef : null} />
            <CheckboxForm ref={activeId === "checkbox" ? currentElemenRef : null} />
        </div>
    )
}

export default SwitchForms