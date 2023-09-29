module.exports = {
  verbose: true,
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,jsx}'],
  coverageDirectory: "./workdocs/coverage",
  coverageReporters: [
    "json-summary",
    "text-summary",
    "text",
    "html"
  ],
  reporters: [
    "default",
    ["jest-junit", {outputDirectory: './workdocs/coverage', outputName: "junit-report.xml"}]
  ]
};