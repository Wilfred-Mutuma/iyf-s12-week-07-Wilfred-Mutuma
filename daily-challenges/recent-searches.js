const SEARCH_STORAGE_KEY = "week7-recent-searches";
const MAX_SEARCHES = 5;

// Load previous searches
function loadSearches() {
  try {
    const savedSearches = localStorage.getItem(SEARCH_STORAGE_KEY);

    if (!savedSearches) {
      return [];
    }

    const parsedSearches = JSON.parse(savedSearches);

    if (!Array.isArray(parsedSearches)) {
      return [];
    }

    return parsedSearches
      .filter((search) => typeof search === "string")
      .slice(0, MAX_SEARCHES);
  } catch (error) {
    console.error("Could not load searches:", error);
    return [];
  }
}

// Save a new search
function saveSearch(search) {
  const cleanSearch = search.trim();

  if (!cleanSearch) {
    return loadSearches();
  }

  const searches = loadSearches();

  const updatedSearches = [
    cleanSearch,
    ...searches.filter(
      (item) => item.toLowerCase() !== cleanSearch.toLowerCase(),
    ),
  ].slice(0, MAX_SEARCHES);

  localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(updatedSearches));

  return updatedSearches;
}

// Display recent searches
function displaySearches(searches) {
  const searchList = document.getElementById("recent-searches");

  if (!searchList) {
    return;
  }

  searchList.innerHTML = searches
    .map((search) => `<li>${escapeHTML(search)}</li>`)
    .join("");
}

// Safely display search text
function escapeHTML(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

// Create the search interface
function createSearchInterface() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Recent Searches</h2>
    <form id="search-form">
      <input
        type="text"
        id="search-input"
        placeholder="Enter a search..."
      >
      <button type="submit">Search</button>
    </form>
    <ul id="recent-searches"></ul>
  `;

  document.body.append(section);

  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searches = saveSearch(input.value);
    displaySearches(searches);

    input.value = "";
  });

  displaySearches(loadSearches());
}

createSearchInterface();
