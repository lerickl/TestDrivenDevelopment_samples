export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provider must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provider must be a number')

  const multiplos = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplos)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })
  // si es '' retorna el numero caso contrario retorna ouput
  return output === '' ? number : output
}