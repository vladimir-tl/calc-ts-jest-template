import { sum } from '../../src/functions/calculator'

test('sums two positive integer numbers: basic', () => {
  const expectedResult: number = 4
  const actualResult: number = sum(2, 2)
  expect(expectedResult).toBe(actualResult)
})
