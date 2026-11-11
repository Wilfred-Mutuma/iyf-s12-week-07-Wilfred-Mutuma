import test from "node:test";
import assert from "node:assert/strict";

import {
  addTask,
  deleteTask,
  toggleTask,
  editTask,
  filterTasks,
  clearCompleted,
} from "../js/todo-logic.js";

const sampleTasks = [
  { id: "1", text: "Learn JavaScript", completed: false },
  { id: "2", text: "Practise coding", completed: true },
];

// Test 1: Add a new task
test("addTask should add a new task", () => {
  const result = addTask(sampleTasks, "Build a website");

  assert.equal(result.length, 3);
  assert.equal(result[2].text, "Build a website");
  assert.equal(result[2].completed, false);
});

// Test 2: Reject empty task text (edge case)
test("addTask should reject empty task text", () => {
  const result = addTask(sampleTasks, "   ");

  assert.equal(result.length, 2);
});

// Test 3: Delete a task
test("deleteTask should remove the selected task", () => {
  const result = deleteTask(sampleTasks, "1");

  assert.equal(result.length, 1);
  assert.equal(result[0].id, "2");
});

// Test 4: Toggle task completion
test("toggleTask should change task completion status", () => {
  const result = toggleTask(sampleTasks, "1");

  assert.equal(result[0].completed, true);
});

// Test 5: Edit task text
test("editTask should update the selected task", () => {
  const result = editTask(sampleTasks, "1", "Study HTML");

  assert.equal(result[0].text, "Study HTML");
});

// Test 6: Filter active tasks
test("filterTasks should return active tasks", () => {
  const result = filterTasks(sampleTasks, "active");

  assert.equal(result.length, 1);
  assert.equal(result[0].completed, false);
});

// Test 7: Filter completed tasks
test("filterTasks should return completed tasks", () => {
  const result = filterTasks(sampleTasks, "completed");

  assert.equal(result.length, 1);
  assert.equal(result[0].completed, true);
});

// Test 8: Clear completed tasks
test("clearCompleted should remove completed tasks", () => {
  const result = clearCompleted(sampleTasks);

  assert.equal(result.length, 1);
  assert.equal(result[0].id, "1");
});

// Test 9: Original array must remain unchanged
test("task functions should not mutate the original array", () => {
  const originalTasks = [{ id: "1", text: "Original task", completed: false }];

  const originalCopy = structuredClone(originalTasks);

  addTask(originalTasks, "New task");
  deleteTask(originalTasks, "1");
  toggleTask(originalTasks, "1");
  editTask(originalTasks, "1", "Updated task");
  clearCompleted(originalTasks);

  assert.deepEqual(originalTasks, originalCopy);
});
