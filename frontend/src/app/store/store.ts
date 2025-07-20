import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@features/Tasks/api/storeModel/tasks.slice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

store.subscribe(() => {
  const tasks = store.getState().tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch