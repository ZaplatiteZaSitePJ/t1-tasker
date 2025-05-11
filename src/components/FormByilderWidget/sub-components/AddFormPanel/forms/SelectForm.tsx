import { useRef, type FC } from "react";
import type { SelectInterface } from "../../../types/selectInterface"
import styles from "./FormStyles.module.scss"
import { useForm } from "react-hook-form";

const SelectForm: FC = () => {
    const {register, handleSubmit, setValue, getValues, watch} = useForm<SelectInterface>({
        defaultValues: {
            choosable: "one",
            variants: []
        }
    })

    const choosable = watch("choosable")

    const variantsInputRef = useRef<null | HTMLInputElement>(null)

    const clearVariants = (inputValue: string): string[] => {
        return inputValue.split("|").map(elem => elem.trim()).filter(Boolean)
    }

    const handleAddVariants = (e: React.KeyboardEvent<HTMLInputElement>): void => {

        
        if (e.key === "Enter")  {
            let inputValue = variantsInputRef?.current?.value 

            e.preventDefault()
            e.stopPropagation()
            
            if ((variantsInputRef.current != null) && (variantsInputRef.current.value)) {
                inputValue = inputValue + " | "

                setValue("variants", clearVariants(inputValue))
                variantsInputRef.current.value = clearVariants(inputValue).join(" | ") + " | "
            }
        }
    }

    const handleSetValue = () => {
        if (choosable === "one")
            setValue("choosable", "multy")
        else
            setValue("choosable", "one")
    }

    const handleAdd = ():void => {
        console.log(getValues())
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleAdd)}>
            <label>
                Label:
                <input {...register("label")} type="text" placeholder="First Name" className={styles.form__labelInput}/>
            </label>

            <label>
                Choosable:
                <div>
                    <button 
                        type="button" 
                        onClick={handleSetValue} 
                    >
                        <span>
                            <span className={choosable === "multy" ? styles.unactive : ""}>one</span>
                            {" / "}
                            <span className={choosable === "one" ? styles.unactive : ""}>mullty</span>
                        </span>
                    </button>
                </div>
            </label>

            <label>
                Variants:
                <input 
                    {...register("variants")} 
                    type="text" 
                    ref={variantsInputRef}
                    onKeyDown={handleAddVariants}
                    className={styles.form__variantsInput}
                    placeholder="Put some chooses"
                />
            </label>
            
            <div className={styles.form__isolatedDiv}>
                <button className={styles.form__addElement} type="submit">add</button>
            </div>
        </form>
    )
} 
export default SelectForm