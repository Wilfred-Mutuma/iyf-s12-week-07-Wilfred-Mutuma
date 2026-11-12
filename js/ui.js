import { state } from "./state.js";
import { filterTasks } from "./todo-logic.js";

// Get HTML elements
const taskList = document.getElementById("task-list");
const tasksRemaining = document.getElementById("tasks-remaining");
const clearCompletedButton = document.getElementById("clear-completed");

// Display tasks on the webpage
export function renderTasks() {
  if (!taskList) return;

  taskList.innerHTML = "";

  const visibleTasks = filterTasks(state.tasks, state.filter);

  if (visibleTasks.length === 0) {
    const message = document.createElement("li");
    message.textContent = "No tasks to display.";
    message.className = "empty-message";
    taskList.appendChild(message);
  }

  visibleTasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = task.completed ? "task-item completed" : "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "complete-checkbox";
    checkbox.dataset.action = "toggle";
    checkbox.dataset.id = task.id;
    checkbox.setAttribute(
      "aria-label",
      `Mark ${task.text} as ${task.completed ? "active" : "completed"}`,
    );

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.className = "task-text";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.dataset.action = "edit";
    editButton.dataset.id = task.id;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.dataset.action = "delete";
    deleteButton.dataset.id = task.id;

    const actions = document.createElement("div");
    actions.className = "task-actions";
    actions.append(editButton, deleteButton);

    listItem.append(checkbox, taskText, actions);
    taskList.appendChild(listItem);
  });

  // Update remaining task count
  const remaining = state.tasks.filter((task) => !task.completed).length;

  tasksRemaining.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} remaining`;

  // Show or hide the clear completed button
  clearCompletedButton.disabled = !state.tasks.some((task) => task.completed);

  // Update active filter button
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.filter === state.filter;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}
