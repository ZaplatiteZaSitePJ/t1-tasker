import { useRef, useState, useEffect, forwardRef} from "react";
import type { SelectInterface } from "../../../types/selectInterface"
import styles from "./FormStyles.module.scss"
import { useForm } from "react-hook-form";


const SelectForm = forwardRef<HTMLFormElement>((props, ref) => {
    const {register, handleSubmit, setValue, getValues, watch} = useForm<SelectInterface>({
        defaultValues: {
            choosable: "one",
            variants: []
        }
    })

    const choosable = watch("choosable")

    const [variantsValue, setVariantsValue] = useState<string>("")

    const variantsInputRef = useRef<null | HTMLTextAreaElement>(null)

    useEffect(() => {
        const textarea = variantsInputRef.current;
        if (!textarea) return;
    
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight / 24}rem`;
      }, [variantsValue]);

    const clearVariants = (inputValue: string): string[] => {
        return inputValue.split("|").map(elem => elem.trim()).filter(Boolean)
    }

    const handleAddVariants = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
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
        <form ref={ref} className={styles.form} onSubmit={handleSubmit(handleAdd)}>
            <label>
                Label:
                <input 
                    {...register("label")} 
                    type="text" 
                    placeholder="First Name" 
                    className={styles.form__labelInput}
                    maxLength={15}
                    />
                    
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
                            <span style={{opacity: 0.5}}>{" / "}</span>
                            <span className={choosable === "one" ? styles.unactive : ""}>mullty</span>
                        </span>
                    </button>
                </div>
            </label>

            <div className={styles.form__isolatedDiv}>
                <label className={styles.form__labelVariants}>
                    Variants:
                </label>
                <textarea 
                        {...register("variants")}
                        placeholder="Put some chooses" 
                        className={styles.form__variantsInput}
                        value={variantsValue}
                        ref={variantsInputRef}
                        onKeyDown={handleAddVariants}
                        onChange={(e) => setVariantsValue(e.target.value)}
                        style={{
                            maxWidth: "50vw"
                          }}
                    />
            </div>
            
            <div className={styles.form__isolatedDiv}>
                <button className={styles.form__addElement} type="submit">add</button>
            </div>
        </form>
    )
})

export default SelectForm