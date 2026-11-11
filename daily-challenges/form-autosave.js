const FORM_STORAGE_KEY = "week7-form-draft";
const AUTOSAVE_INTERVAL = 5000;

// Create the form
function createForm() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Form Autosave</h2>

    <form id="autosave-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">

      <label for="email">Email:</label>
      <input type="email" id="email" name="email">

      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">Submit Form</button>
      <button type="button" id="clear-draft">Clear Draft</button>
    </form>

    <p id="autosave-status">Your draft is ready.</p>
  `;

  document.body.append(section);
}

// Save form data
function saveFormData() {
  const form = document.getElementById("autosave-form");
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  try {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(data));

    document.getElementById("autosave-status").textContent =
      "Draft saved automatically.";
  } catch (error) {
    console.error("Could not save draft:", error);
  }
}

// Restore saved form data
function restoreFormData() {
  try {
    const savedData = localStorage.getItem(FORM_STORAGE_KEY);

    if (!savedData) {
      return;
    }

    const data = JSON.parse(savedData);

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return;
    }

    document.getElementById("name").value =
      typeof data.name === "string" ? data.name : "";

    document.getElementById("email").value =
      typeof data.email === "string" ? data.email : "";

    document.getElementById("message").value =
      typeof data.message === "string" ? data.message : "";

    document.getElementById("autosave-status").textContent =
      "Your previous draft has been restored.";
  } catch (error) {
    console.error("Could not restore draft:", error);
  }
}

// Clear saved draft
function clearDraft() {
  localStorage.removeItem(FORM_STORAGE_KEY);

  document.getElementById("autosave-form").reset();

  document.getElementById("autosave-status").textContent =
    "Saved draft cleared.";
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("autosave-form");

  if (!form.reportValidity()) {
    return;
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  form.reset();

  document.getElementById("autosave-status").textContent =
    "Form submitted successfully. Draft cleared.";
}

// Initialise autosave
createForm();
restoreFormData();

document
  .getElementById("autosave-form")
  .addEventListener("submit", handleSubmit);

document.getElementById("clear-draft").addEventListener("click", clearDraft);

setInterval(saveFormData, AUTOSAVE_INTERVAL);
