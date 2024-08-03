import { sum } from '../src/calculator'

test('sums two positive numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
