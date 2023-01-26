// module.exports = {
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/$1',
//         '^~/(.*)$': '<rootDir>/$1',
//         '^vue$': 'vue/dist/vue.common.js',
//     },
//     moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
//     transform: {
//         '^.+\\.ts$': 'ts-jest',
//         '^.+\\.js$': 'babel-jest',
//         '.*\\.(vue)$': 'vue-jest',
//     },
//     collectCoverage: true,
//     collectCoverageFrom: [
//         '<rootDir>/components/**/*.vue',
//         '<rootDir>/pages/**/*.vue',
//     ],
// }

module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        // this line is optional and the tilde shortcut
        // will not be used in this tutorial
        '^~/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
    modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],

    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/layouts/**/*.vue',
        '<rootDir>/pages/**/*.vue',
        '<rootDir>/lib/**/*.ts',
        '<rootDir>/plugins/**/*.ts',
        '<rootDir>/store/**/*.ts',
    ],
    setupFiles: ['./tests/setupTest.ts'],
}
