/*
  Week 7 Refactor Challenge
  Example: Improving Week 5 To-Do List code.
*/

// Validate and clean task text
export function normalizeTaskText(text) {
  if (typeof text !== "string") {
    throw new TypeError("Task text must be a string.");
  }

  return text.trim();
}

// Create a new task
export function createTask(text) {
  const cleanText = normalizeTaskText(text);

  if (!cleanText) {
    throw new Error("Task text cannot be empty.");
  }

  return {
    id: Date.now(),
    text: cleanText,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// Add a task without changing the original array
export function addTask(tasks, text) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Tasks must be an array.");
  }

  const newTask = createTask(text);

  return [...tasks, newTask];
}

// Toggle task completion
export function toggleTask(tasks, taskId) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Tasks must be an array.");
  }

  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
}

// Count tasks that are not completed
export function countRemainingTasks(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Tasks must be an array.");
  }

  return tasks.filter((task) => !task.completed).length;
}

// Safely load tasks from storage
export function loadTasks(storage, storageKey) {
  try {
    const savedTasks = storage.getItem(storageKey);

    if (!savedTasks) {
      return [];
    }

    const parsedTasks = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return [];
    }

    return parsedTasks;
  } catch (error) {
    console.error("Unable to load saved tasks:", error);
    return [];
  }
}
