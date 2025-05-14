import { useEffect, useState, type FC } from "react";
import styles from "./AddFormPanel.module.scss"
import type { ChoosenFormElementType } from "../../types/choosenFormElementType";
import SwitchForms from "./forms/SwitchFroms";

type ChangeFormButtonElementProps = {
    id: ChoosenFormElementType,
    activeId: ChoosenFormElementType,
    title: ChoosenFormElementType,
    onClick: (id: ChoosenFormElementType) => void
  };


const AddFormButton: FC<ChangeFormButtonElementProps> = ({title, id, activeId, onClick}) => {
    const [isActual, setisActual] = useState<boolean>(false)

    useEffect(() => {
        if (activeId === id) {
            setisActual(true) 
        } else {
            setisActual(false)
        }
    }, [activeId, isActual])

    return (
        <button 
            onClick={() => onClick(id)} 
            style={isActual ? {opacity: 1, fontWeight: "bold"} : {opacity: 0.5, fontWeight: "lighter"}}
            className={styles.addFormPanel__formElements}        
        >
            {title}
        </button>
    )
}

const AddFormPanel: FC = () => {
    const [activeId, setActiveId] = useState<ChoosenFormElementType>("textfield")
    const handleChangeForm = (id: ChoosenFormElementType): void => {
        setActiveId(id)
    }

    return (
        <>
            <nav className={styles.addFormPanel}>
                <AddFormButton title="textfield" id={"textfield"} activeId={activeId} onClick={handleChangeForm}/>
                <AddFormButton title="select" id={"select"} activeId={activeId} onClick={handleChangeForm}/>
                <AddFormButton title="checkbox" id={"checkbox"} activeId={activeId} onClick={handleChangeForm}/>
            </nav>
                
            <SwitchForms activeId = {activeId} />    
        </>    
    )
}

export default AddFormPanel