
module.exports = {
    testEnvironment: "node",
    rootDir: '../../',
    testMatch: [
        '<rootDir>/lib/*.spec.ts'
    ],
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json'
        }
    },
    transform: {
        "binding.js$": ['ts-jest'],
        "^.+\\.ts?$": ['ts-jest'],
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/samples/'
    ],
    modulePathIgnorePatterns: [
        '/cmake-js/',
        '/samples/'
    ],
    setupFiles: ['<rootDir>/test/native/jest.setup.ts']
}
