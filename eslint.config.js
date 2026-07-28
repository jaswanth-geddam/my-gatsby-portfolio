const js = require("@eslint/js")
const reactPlugin = require("eslint-plugin-react")

module.exports = [
  js.configs.recommended,
  {
    plugins: { react: reactPlugin },
    settings: { react: { version: "16.0" } },
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        fetch: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
  {
    files: ["gatsby-*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]
