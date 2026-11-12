# Week 7 – JavaScript Best Practices

**Student:** Wilfred Mutuma  
**GitHub:** [Wilfred-Mutuma](https://github.com/Wilfred-Mutuma)  
**Repository:** [iyf-s12-week-07-Wilfred-Mutuma](https://github.com/Wilfred-Mutuma/iyf-s12-week-07-Wilfred-Mutuma)

## Project Overview

This project focuses on JavaScript best practices, code organisation, modular programming, local storage, state management, testing, and code quality.

The main project is a refactored To-Do List application based on the Week 5 project. It uses separate JavaScript modules to make the code easier to maintain, test, and understand.

## Main Features

### 1. Refactored To-Do List

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or active.
- Filter tasks by all, active, and completed.
- Clear completed tasks.
- Save tasks and selected filters in localStorage.
- Restore saved data after refreshing the browser.
- Handle missing or invalid stored data.

### 2. Shopping Cart

- Display available products.
- Add products to the cart.
- Increase and decrease product quantities.
- Remove products.
- Calculate total price.
- Display the total number of items.
- Save cart data in localStorage.
- Clear the entire cart.

### 3. Daily Challenges

- Theme persistence using localStorage.
- Recent search history.
- Form autosave and recovery.
- JavaScript code refactoring.
- Week 6 Weather Dashboard code review.

## Project Structure

```text
iyf-s12-week-07-Wilfred-Mutuma/
│
├── index.html
├── styles.css
├── app.js
├── package.json
├── package-lock.json
├── eslint.config.js
├── .prettierrc
├── .gitignore
├── README.md
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── todo-logic.js
│   └── ui.js
│
├── tests/
│   └── todo-logic.test.js
│
├── cart/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── cart-logic.js
│   └── ui.js
│
└── daily-challenges/
    ├── theme-persistence.js
    ├── recent-searches.js
    ├── form-autosave.js
    ├── refactor-challenge.js
    └── week-6-review.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript ES Modules
- Browser DOM API
- localStorage
- Node.js
- Node.js built-in test runner
- ESLint 9
- Prettier
- Git and GitHub

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/Wilfred-Mutuma/iyf-s12-week-07-Wilfred-Mutuma.git
   ```

2. Open the project folder in VS Code.

3. Install development dependencies:

   ```bash
   npm install
   ```

4. Open the root `index.html` using VS Code Live Server.

5. To access the Shopping Cart, open `cart/index.html` using Live Server.

## Testing

Run the automated tests:

```bash
npm test
```

The To-Do List logic is tested using Node.js built-in test runner.

Current result: 9 tests passing.

## Code Quality

Run ESLint:

```bash
npm run lint
```

Format the project with Prettier:

```bash
npm run format
```

The project uses separate modules to keep application logic, state management, storage, and user interface code organised.

## Learning Outcomes

Through this project, I practised:

- Working with localStorage.
- Managing application state.
- Using JavaScript modules.
- Writing reusable and testable functions.
- Handling invalid or missing stored data.
- Writing automated unit tests.
- Applying ESLint and Prettier.
- Improving code readability and maintainability.
- Reviewing another developer's code.

## Live Demo

GitHub Pages deployment link: **To be added after deployment.**

## Collaboration

**My Pull Request:** [Week 7 Refactor PR #1](https://github.com/Wilfred-Mutuma/iyf-s12-week-07-Wilfred-Mutuma/pull/1)

**Peer Reviewer:** To be added after IYF assigns my Week 7 partner.

**Peer Review PR:** To be added after receiving my partner's pull request.

## Author

**Wilfred Mutuma**  
Electrical Engineer | Security Systems Specialist | Beginner Web Developer

GitHub: [Wilfred-Mutuma](https://github.com/Wilfred-Mutuma)
