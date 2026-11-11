const TASKS_KEY = "week7-todo-tasks";
const FILTER_KEY = "week7-todo-filter";

// Save tasks to localStorage
export function saveTasks(tasks) {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Could not save tasks:", error);
  }
}

// Load tasks from localStorage
export function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(TASKS_KEY);

    if (!savedTasks) {
      return [];
    }

    const tasks = JSON.parse(savedTasks);

    if (!Array.isArray(tasks)) {
      return [];
    }

    return tasks.filter(
      (task) =>
        task &&
        typeof task.id === "string" &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean",
    );
  } catch (error) {
    console.error("Could not load tasks:", error);
    return [];
  }
}

// Save the selected filter
export function saveFilter(filter) {
  try {
    localStorage.setItem(FILTER_KEY, filter);
  } catch (error) {
    console.error("Could not save filter:", error);
  }
}

// Load the selected filter
export function loadFilter() {
  try {
    const filter = localStorage.getItem(FILTER_KEY);

    const validFilters = ["all", "active", "completed"];

    return validFilters.includes(filter) ? filter : "all";
  } catch (error) {
    console.error("Could not load filter:", error);
    return "all";
  }
}
