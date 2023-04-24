module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  moduleNameMapper: {
    '@k-link/core/src/styles.api': '<rootDir>/src/k-link-core/src/styles.api',
    '@k-link/(.*)': '<rootDir>/src/k-link-$1/src',
  },
};
