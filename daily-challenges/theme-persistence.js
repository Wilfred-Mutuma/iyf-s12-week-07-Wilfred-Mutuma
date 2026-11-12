const THEME_KEY = "week7-theme";

// Apply the selected theme
function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
}

// Save the selected theme
function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

// Load the saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
}

// Create the theme toggle button
function createThemeButton() {
  const button = document.createElement("button");

  button.textContent = "Toggle Theme";
  button.id = "theme-toggle";

  document.body.prepend(button);

  button.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}

// Restore theme when the page loads
const initialTheme = loadTheme();

applyTheme(initialTheme);
createThemeButton();
