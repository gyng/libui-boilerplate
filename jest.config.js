module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  },
  setupTestFrameworkScriptFile: "<rootDir>/test/helpers/enzyme.ts",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};