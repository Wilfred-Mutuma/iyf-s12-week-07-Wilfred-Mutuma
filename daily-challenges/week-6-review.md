# Week 6 Weather Dashboard — Code Review

## Project Reviewed

- Project: Week 6 Weather Dashboard
- API: OpenWeatherMap
- Language: JavaScript
- Repository: https://github.com/Wilfred-Mutuma/iyf-s12-week-06-Wilfred-Mutuma

## 1. What Is Working Well

- Uses async/await to retrieve weather information.
- Uses Fetch API to communicate with OpenWeatherMap.
- Displays temperature, humidity, wind speed and pressure.
- Provides loading messages while fetching data.
- Handles invalid city names and API errors.
- Uses try/catch/finally for request error handling.
- Stores the five most recent successful searches.
- Allows users to search again using recent searches.
- Uses textContent when displaying recent city names.

## 2. Improvements Needed

### A. API Key Security

The API key is accessed through window.OPENWEATHER_API_KEY.

A browser-based application cannot keep an API key secret. For a public deployment, use a secure backend proxy where possible and restrict the API key's permissions and usage.

### B. Local Storage Error Handling

The recent-search functions use JSON.parse directly.

Improvement:

- Add try/catch around JSON parsing.
- Handle corrupted or invalid saved data.
- Handle localStorage access errors.

### C. API Response Validation

The application accesses nested response properties such as data.weather[0].

Improvement:

- Check that the API response contains the expected properties.
- Handle unexpected or incomplete API responses gracefully.

### D. Code Organisation

The application currently contains several responsibilities in one app.js file.

Improvement:

- Separate API communication.
- Separate localStorage operations.
- Separate DOM rendering.
- Keep application event handling organised.

### E. User Experience

Improvement:

- Provide clear feedback for unexpected errors.
- Prevent empty searches.
- Maintain useful loading and error messages.
- Make sure the search button is re-enabled after every request.

## 3. Conclusion

The Week 6 Weather Dashboard demonstrates a good understanding of asynchronous JavaScript, Fetch API, async/await, error handling and localStorage.

The main areas for improvement are API key security, stronger data validation, safer storage handling and better code organisation.

This review provides a foundation for improving the project using the JavaScript best practices learned in Week 7.
