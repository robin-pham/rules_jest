const config = {
  testMatch: [
    "**/__tests__/**/*.{ts,tsx,js,jsx}",
    "**/*.{test,spec}.{ts,tsx,js,jsx}",
  ],
  transform: {
    "^.+\\.[tj]sx?$": "@swc/jest",
  },
};

module.exports = config;
