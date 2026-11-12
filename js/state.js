import {
  addTask,
  deleteTask,
  toggleTask,
  editTask,
  clearCompleted,
} from "./todo-logic.js";

import { saveTasks, saveFilter } from "./storage.js";

// Central application state
export const state = {
  tasks: [],
  filter: "all",
};

// Add a task
export function createTask(text) {
  state.tasks = addTask(state.tasks, text);
  saveTasks(state.tasks);
}

// Delete a task
export function removeTask(taskId) {
  state.tasks = deleteTask(state.tasks, taskId);
  saveTasks(state.tasks);
}

// Toggle task completion
export function changeTaskStatus(taskId) {
  state.tasks = toggleTask(state.tasks, taskId);
  saveTasks(state.tasks);
}

// Edit task text
export function updateTask(taskId, newText) {
  state.tasks = editTask(state.tasks, taskId, newText);
  saveTasks(state.tasks);
}

// Remove completed tasks
export function removeCompletedTasks() {
  state.tasks = clearCompleted(state.tasks);
  saveTasks(state.tasks);
}

// Change the current filter
export function changeFilter(filter) {
  state.filter = filter;
  saveFilter(filter);
}
