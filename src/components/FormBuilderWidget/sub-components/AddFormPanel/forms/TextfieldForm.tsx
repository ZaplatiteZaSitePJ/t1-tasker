import { forwardRef} from "react";
import type { TextfieldInterface } from "../../../types/textfieldInterface"
import styles from "./FormStyles.module.scss"
import { useForm } from "react-hook-form";

const TextfieldForm = forwardRef<HTMLFormElement>((props, ref) => {
  const { register, handleSubmit, setValue, getValues, watch } = useForm<TextfieldInterface>({
    defaultValues: {
      value: "text",
    },
  });

  const value = watch("value");

  const handleSetValue = () => {
    setValue("value", value === "numbers" ? "text" : "numbers");
  };

  const handleAdd = (): void => {
    console.log(getValues());
  };

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
        Value:
        <div>
          <button type="button" onClick={handleSetValue}>
            <span>
              <span className={value === "numbers" ? styles.unactive : ""}>text</span>
              <span style={{ opacity: 0.5 }}>{" / "}</span>
              <span className={value === "text" ? styles.unactive : ""}>number</span>
            </span>
          </button>
        </div>
      </label>

      <label>
        Min. Length:
        <input
          {...register("minLenght")}
          type="number"
          className={styles.form__lenghtInput}
          placeholder="-"
        />
      </label>

      <label>
        Max. Length:
        <input
          {...register("maxLenght")}
          type="number"
          className={styles.form__lenghtInput}
          placeholder="-"
        />
      </label>

      <div className={styles.form__isolatedDiv}>
        <button className={styles.form__addElement} type="submit">
          add
        </button>
      </div>
    </form>
  );
});

export default TextfieldForm;