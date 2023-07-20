import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) : boolean => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a strin')

  const isSameLength = from.length === to.length
  if (isSameLength) return false 
  
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}
  for(let i = 0; i < from.length ; i++){
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformations[fromLetter]
    if (storedLetter !== toLetter) return false
    transformations[fromLetter] = toLetter
  }
  return true
}

describe('CanReconfigure', () : void => {
  it('should throw if first parameter is misssing', () : void => {
    expect(() : boolean => canReconfigure()).toThrow()
  })
  it('should throw if first parameter is not a string', () : void => {
    expect(() : boolean => canReconfigure(1)).toThrow()
  })
  it('should throw if second parameter is not a string', () : void => {
    expect(() : boolean => canReconfigure('a')).toThrow()
  })
  it('should return false if strings provider have diferent length', () : void => {
    expect(canReconfigure('anc','ab')).toBe(false)
  })
  it('should return false if strings provider have diferent length event with same unique letters', () : void => {
    expect(canReconfigure('aab','ab')).toBe(false)
  })
  it('should return false if strings provider have diferent number of unique letter', () : void => {
    expect(canReconfigure('anc','ddd')).toBe(false)
  })
  it('should return false if strings has diferent order of transformation', () : void => {
    expect(canReconfigure('XBOX','XXBO')).toBe(false)
  })
 
  
})