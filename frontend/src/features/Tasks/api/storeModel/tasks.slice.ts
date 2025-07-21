import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskProps } from "@shared/types/Task.interface";
import { getDate } from "@features/lib/getDate";
import { deleteTaskTH, fetchTasksTH, updateTaskTH } from "./tasks.thunk";
import { addTaskTH } from "./tasks.thunk";


interface TaskState {
  list: TaskProps[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  list: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskProps>) => {
        state.list.push(action.payload);
      },
      prepare: (newTask: Omit<TaskProps, "id" | "createdAt">) => ({
        payload: {
          ...newTask,
          id: nanoid(),
          createdAt: getDate(),
        },
      }),
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },

    updateTask: (state, action: PayloadAction<TaskProps>) => {
      const index = state.list.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksTH.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasksTH.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasksTH.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка';
      })
      
      .addCase(addTaskTH.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(updateTaskTH.fulfilled, (state, action) => {
        const index = state.list.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })

      .addCase(deleteTaskTH.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload);
      });

  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
