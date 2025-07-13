import React from 'react'
import styles from "./AddTaskForm.module.scss"
import { useForm } from 'react-hook-form';
import type { TaskProps } from '../tasks/Task.interface';
import { TextField } from '@mui/material';

export default function AddTaskForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<TaskProps>({
    defaultValues: {title: "Без названия", description: "Без Описания", date: "None", priorites: "Low"}
  });

  return (
    <div className={styles.container}>
      <h2>
        Add Task
      </h2>
      <form>
        <TextField
          label="title"
          variant="standard"
          fullWidth
            {...register("title", {
              required: "Это поле обязательно",
              minLength: {
                value: 2,
                message: "Минимум 2 символа"
            }
        })}
      />
              <TextField
          label="description"
          variant="standard"
          fullWidth
            {...register("description", {
              required: "Это поле обязательно",
              minLength: {
                value: 10,
                message: "Минимум 10 символов"
            }
        })}
      />

      </form>
      
    </div>
  )
}
