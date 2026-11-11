const SEARCH_STORAGE_KEY = "week7-recent-searches";
const MAX_SEARCHES = 5;

function loadRecentSearches() {
  try {
    const savedSearches = JSON.parse(localStorage.getItem(SEARCH_STORAGE_KEY));

    if (!Array.isArray(savedSearches)) {
      return [];
    }

    return savedSearches
      .filter((search) => typeof search === "string" && search.trim())
      .slice(0, MAX_SEARCHES);
  } catch (error) {
    console.error("Could not load recent searches:", error);
    return [];
  }
}

function saveRecentSearch(searchTerm) {
  const search = searchTerm.trim();

  if (!search) {
    return;
  }

  const searches = loadRecentSearches();

  const updatedSearches = [
    search,
    ...searches.filter((item) => item.toLowerCase() !== search.toLowerCase()),
  ].slice(0, MAX_SEARCHES);

  try {
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(updatedSearches));
  } catch (error) {
    console.error("Could not save recent searches:", error);
  }
}

function displayRecentSearches() {
  const dropdown = document.getElementById("recent-searches");
  const searches = loadRecentSearches();

  dropdown.innerHTML = "";

  searches.forEach((search) => {
    const option = document.createElement("option");
    option.value = search;
    option.textContent = search;
    dropdown.appendChild(option);
  });
}

function performSearch(searchTerm) {
  const result = document.getElementById("search-result");

  if (!searchTerm.trim()) {
    result.textContent = "Please enter a search term.";
    return;
  }

  result.textContent = `You searched for: ${searchTerm}`;
  saveRecentSearch(searchTerm);
  displayRecentSearches();
}

function createSearchInterface() {
  const container = document.createElement("section");

  const heading = document.createElement("h2");
  heading.textContent = "Recent Searches";

  const form = document.createElement("form");
  form.id = "search-form";

  const input = document.createElement("input");
  input.type = "search";
  input.id = "search-input";
  input.placeholder = "Enter a search term";
  input.required = true;

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Search";

  const dropdown = document.createElement("select");
  dropdown.id = "recent-searches";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a recent search";
  dropdown.appendChild(placeholder);

  const result = document.createElement("p");
  result.id = "search-result";
  result.setAttribute("aria-live", "polite");

  form.append(input, button);

  container.append(heading, form, dropdown, result);
  document.body.appendChild(container);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    performSearch(input.value);
    input.value = "";
  });

  dropdown.addEventListener("change", () => {
    if (dropdown.value) {
      input.value = dropdown.value;
      performSearch(dropdown.value);
    }

    dropdown.selectedIndex = 0;
  });

  displayRecentSearches();
}

createSearchInterface();
