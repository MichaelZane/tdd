import { getLetterCount } from './letter-count'
import { isEqual } from 'lodash'

export const isAnagram = (s1, s2) => {
    const s1LetterCount = getLetterCount(s1)
    const s2LetterCount = getLetterCount(s2)

    return isEqual(s1LetterCount, s2LetterCount)


}