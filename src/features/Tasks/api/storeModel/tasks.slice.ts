import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskProps } from "@shared/types/Task.interface";
import { getAllTasks } from "../localstorage";
import { getDate } from "@features/lib/getDate";

const initialState: TaskProps[] = getAllTasks()

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskProps>) => {
        state.push(action.payload);
      },
      prepare: (newTask: Omit<TaskProps, "id" | "createdAt">) => ({
        payload: {
          ...newTask,
          id: nanoid(),
          createdAt: getDate(),
        },
      }),
    },

    deleteTask:
        (state, action: PayloadAction<string>) => {
            const id = action.payload
            return state.filter((task) => task.id !== id)
        },
    
    updateTask: 
        (state, action: PayloadAction<TaskProps>) => {
            const {id: taskId} = action.payload
            const stateIndex = state.findIndex((task) => task.id === taskId)
            state[stateIndex] = action.payload 
        },
    }
})
export const {addTask, updateTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer