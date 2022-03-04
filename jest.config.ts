/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  "preset": "ts-jest",
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  "testEnvironment": "jsdom",
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  "roots": [
    "src"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx)$",
  "transform": {
    "^.+\\.tsx$": "ts-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  },
  "moduleNameMapper": {
    "src/(.*)": "<rootDir>/src/$1"
  }
}