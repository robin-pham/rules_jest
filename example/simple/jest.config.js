const path = require("path");

const config = {
  testMatch: [
    "**/__tests__/**/*.{ts,tsx,js,jsx}",
    "**/*.{test,spec}.{ts,tsx,js,jsx}",
  ],
  transform: {
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "babel.config.js") },
    ],
  },
};

module.exports = config;
