const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// Test capitalizeWords function.
describe('capitalizeWords', () => {
    // Verify basic functionality.
    it('capitalize basic inputs', () => {
        const testString1 = 'hello world'
        const testString2 = 'what is up my dudes'

        expect(capitalizeWords(testString1)).toBe('Hello World')
        expect(capitalizeWords(testString2)).toBe('What Is Up My Dudes')
    }),
    // Verify edge cases: empty string, string containing special character, single-word string.
    it('edge cases', () => {
        const emptyString = ''
        const specialCharString = 'hello-world'
        const singleWord = 'greetings'

        expect(capitalizeWords(emptyString)).toBe('')
        expect(capitalizeWords(specialCharString)).toBe('Hello-World')
        expect(capitalizeWords(singleWord)).toBe('Greetings')
    })
})

// Test filterActiveUsers function.
describe('filterActiveUsers', () => {
    // Verify basic functionality with standard use case.
    it('filter active users from a mixed list', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Jerry', isActive: false },
            { name: 'Bingle', isActive: true }
        ]

        expect(filterActiveUsers(users)).toEqual([users[0], users[2]])
    }),
    // Verify empty list returned for an array consisting only of inactive users.
    it('filter array of all inactive users', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Jerry', isActive: false },
            { name: 'Bingle', isActive: false }
        ]

        expect(filterActiveUsers(users)).toEqual([])
    }),
    // Verify empty array input returns empty array output.
    it('filter empty array', () => {
        const users = []

        expect(filterActiveUsers(users)).toEqual([])
    })
})

// Test logAction function.
describe('logAction', () => {
    // Verify basic functionality.
    it('log action with basic inputs', () => {
        const expectedString = 'User adrienn performed crimes at'

        expect(logAction('crimes', 'adrienn')).toContain(expectedString)
    }),
    // Verify that a TypeError is thrown on missing input (missing one or the other is functionally identical).
    it('missing action or username', () => {
        expect(() => logAction('adrienn')).toThrow()
        expect(() => logAction('crimes')).toThrow()
    }),
    // Verify that empty strings do not throw an error.
    it('empty string inputs', () => {
        const expectedString = 'User  performed  at'

        expect(logAction('', '')).toContain(expectedString)
    })
})