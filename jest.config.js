module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },

  transformIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },

  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  /**
   * coverage
   */
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}', '!**/demo/**'],
  // coverageReporters: ['html', 'lcov', 'text-summary'],
  // coverageDirectory: './tests/coverage',
}
