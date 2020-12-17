import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('isAnagram -- basic functionality', () => {
    it('returns true when two known anagrams are passed in', () => {
        const expected = true
        const actual = isAnagram('listen', 'silent')
        expect(actual).to.equal(expected)
    })
    it('return s false when any of the strings has extra letters', () => {
        const expected = false
        const actual = isAnagram('elbows', 'below')
        expect(actual).to.equal(expected)

        const actual2 = isAnagram('below', 'elbows')
        expect(actual2).to.equal(expected)

    })

    it('returns false when the strings have the same letters in different quantities', () => {
        const expected = false
        const actual = isAnagram('listens', 'silent')
        expect(actual).to.equal(expected)
    })
})

// 'listen' 'silent'
// 'elbow' 'below'

// 'elbows' 'below' NOT anagrams

// 'listens' 'silent' NOT anagrams

// 'conversation' 'voices rant on' ARE anagrams

// 'STATE' 'taste' ARE anagrams