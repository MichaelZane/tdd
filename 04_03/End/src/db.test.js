import { expect } from 'chai'
import { getUserByUsername } from './db'
import { getDatabaseData, resetDatabase, setDatabaseData } from './testHelpers'


describe('getUserByUsername', () => {
    afterEach('reset the database', async () => {
        await resetDatabase()
    })
    it('get the correct user from the database given a username', async () => {
        
        const fakeData = [
            {
            id: '007',
            username: 'Sean Connery',
            email: 'seanconnery@gmail.com',
            },
            {
            id: '000',
            username: 'wrong',
            email: 'wrong@wrong.com'
            }
        ]
        await setDatabaseData('users', fakeData)
        
        const actual = await getUserByUsername('Sean Connery')
        
        const finalDbState = await getDatabaseData('users')
        
        const expected = {
            id: '007',
            username: 'Sean Connery',
            email: 'seanconnery@gmail.com',
        }

        expect(actual).excludingEvery('_id').to.deep.equal(expected)
        expect(finalDbState).excludingEvery('_id').to.deep.equal(fakeData)

        
    })
})
