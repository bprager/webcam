module.exports = {
  root: true,
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
     ecmaVersion: 2020,
  },
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
