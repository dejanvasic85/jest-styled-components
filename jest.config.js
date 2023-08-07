module.exports = {
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "styled-components":
      "styled-components/dist/styled-components.browser.cjs.js",
  },
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
};
