const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
    it('capitalize basic inputs', () => {
        const testString1 = 'hello world'
        const testString2 = 'what is up my dudes'

        expect(capitalizeWords(testString1)).toBe('Hello World')
        expect(capitalizeWords(testString2)).toBe('What Is Up My Dudes')
    }),
    it('edge cases', () => {
        const emptyString = ''
        const specialCharString = 'hello-world'
        const singleWord = 'greetings'

        expect(capitalizeWords(emptyString)).toBe('')
        expect(capitalizeWords(specialCharString)).toBe('Hello-World')
        expect(capitalizeWords(singleWord)).toBe('Greetings')
    })
})

describe('filterActiveUsers', () => {
    it('filter active users from a mixed list', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Jerry', isActive: false },
            { name: 'Bingle', isActive: true }
        ]

        expect(filterActiveUsers(users)).toEqual([users[0], users[2]])
    }),
    it('filter array of all inactive users', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Jerry', isActive: false },
            { name: 'Bingle', isActive: false }
        ]

        expect(filterActiveUsers(users)).toEqual([])
    }),
    it('filter empty array', () => {
        const users = []

        expect(filterActiveUsers(users)).toEqual([])
    })
})

describe('logAction', () => {
    it('log action with basic inputs', () => {
        const expectedString = 'User adrienn performed crimes at'

        expect(logAction('crimes', 'adrienn')).toContain(expectedString)
    }),
    it('missing action or username', () => {
        const missingAction = logAction('adrienn')
        const expectedMissingAction = 'User undefined performed adrienn at'

        const missingUser = logAction('crimes')
        const expectedMissingUser = 'User undefined performed crimes at'

        expect(missingAction).toContain(expectedMissingAction)
        expect(missingUser).toContain(expectedMissingUser)
    }),
    it('empty string inputs', () => {
        const expectedString = 'User  performed  at'

        expect(logAction('', '')).toContain(expectedString)
    })
})