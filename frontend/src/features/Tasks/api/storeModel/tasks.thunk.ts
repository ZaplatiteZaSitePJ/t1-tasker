import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TaskProps } from "@shared/types/Task.interface";

export const fetchTasksTH = createAsyncThunk<TaskProps[]>(
  'tasks/fetchTasks',
  async () => {
    const response = await fetch("http://localhost:3000/tasks");
    if (!response.ok) throw new Error('Error loading tasks');
    return await response.json();
  }
); 


export const addTaskTH = createAsyncThunk<TaskProps, TaskProps>(
  'tasks/addTask',
  async (newTask) => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json", // ← обязательно
      },
      body: JSON.stringify(newTask)
    });
    if (!response.ok) throw new Error('Error add task');
    return await response.json();
  }
); 

export const updateTaskTH = createAsyncThunk<TaskProps, TaskProps>(
  'tasks/updateTask',
  async (updatedTask) => {
    const response = await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
      method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    if (!response.ok) throw new Error('Error updating task');
    return await response.json();
  }
);

export const deleteTaskTH = createAsyncThunk<string, string>(
  'tasks/deleteTask',
  async (taskId) => {
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Error deleting task');
    return taskId;
  }
);