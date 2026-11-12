import {
  state,
  createTask,
  removeTask,
  changeTaskStatus,
  updateTask,
  removeCompletedTasks,
  changeFilter,
} from "./state.js";

import { loadTasks, loadFilter } from "./storage.js";
import { renderTasks } from "./ui.js";

// Get HTML elements
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const clearCompletedButton = document.getElementById("clear-completed");

const filterButtons = document.querySelectorAll(".filter-button");

// Restore saved application data
state.tasks = loadTasks();
state.filter = loadFilter();

// Display saved tasks
renderTasks();

// Add a new task
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  createTask(taskText);

  taskInput.value = "";
  taskInput.focus();

  renderTasks();
});

// Handle task actions using event delegation
taskList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }

  const taskId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "delete") {
    removeTask(taskId);
  }

  if (action === "edit") {
    const task = state.tasks.find((item) => item.id === taskId);

    if (!task) {
      return;
    }

    const newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim()) {
      updateTask(taskId, newText);
    }
  }

  renderTasks();
});

// Handle task completion
taskList.addEventListener("change", (event) => {
  if (event.target.matches('input[data-action="toggle"]')) {
    changeTaskStatus(event.target.dataset.id);
    renderTasks();
  }
});

// Handle task filters
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeFilter(button.dataset.filter);
    renderTasks();
  });
});

// Clear all completed tasks
clearCompletedButton.addEventListener("click", () => {
  removeCompletedTasks();
  renderTasks();
});
