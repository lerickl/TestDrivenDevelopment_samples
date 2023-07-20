import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // deberia ser una function
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  // deberia lanzar una exception si no se proporciona un numero como parametro
  // it('should throw if not number is provided as parameter', () => {
  //   expect(() => fizzbuzz()).toThrow()
  // })
  // debería lanzar un mensaje de error específico 'no se proporciona un número'
  it('should throw a specific error message not a number is provider', () => {
    expect(() => fizzbuzz(NaN)).toThrow()
  })
  // deberia retornar 1 si el numero proporcionado es 1
  it('should return 1 if number provider is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return 2 if number provider is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('should return fizz if number provider is  multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })
  it('should return fizz if number provider is  multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })
  it('should return fizzbuzz if number provider is  multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
