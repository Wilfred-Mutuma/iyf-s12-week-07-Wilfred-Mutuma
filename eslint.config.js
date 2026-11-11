export default [
  {
    ignores: ["node_modules/**", "cart/**", "daily-challenges/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        structuredClone: "readonly",
        prompt: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
