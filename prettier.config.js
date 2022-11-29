const options = {
  arrowParents: "avoid",
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: true,
  tabWidth: 2,
  trailingComma: "none",
  // npm install --save-dev @trivago/prettier-plugin-sort-imports
  importOrder: [
    "^react",
    "^polished",
    "^@mui/material",
    "^@mui/icons",
    "^components/(.*)$",
    `^(?!react|@mui|styles|components|${`.\/`}|polished)`,
    "^styles",
    "^[./]"
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: false
};

module.exports = options;
