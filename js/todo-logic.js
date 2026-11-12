/**
 * Pure functions for managing To-Do tasks.
 * These functions do not access the DOM or localStorage.
 */

/**
 * Add a new task to the task list.
 */
export function addTask(tasks, text) {
  const trimmedText = text.trim();

  if (!trimmedText) {
    return tasks;
  }

  const newTask = {
    id: Date.now().toString(),
    text: trimmedText,
    completed: false,
  };

  return [...tasks, newTask];
}

/**
 * Remove a task using its ID.
 */
export function deleteTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId);
}

/**
 * Toggle a task's completed status.
 */
export function toggleTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
}

/**
 * Edit a task's text.
 */
export function editTask(tasks, taskId, newText) {
  const trimmedText = newText.trim();

  if (!trimmedText) {
    return tasks;
  }

  return tasks.map((task) =>
    task.id === taskId ? { ...task, text: trimmedText } : task,
  );
}

/**
 * Filter tasks by their completion status.
 */
export function filterTasks(tasks, filter) {
  if (filter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (filter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

/**
 * Remove all completed tasks.
 */
export function clearCompleted(tasks) {
  return tasks.filter((task) => !task.completed);
}
