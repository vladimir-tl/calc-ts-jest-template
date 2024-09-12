import { sum } from '../src/calculator'

test('sums two positive integer numbers: basic', () => {
  const expectedResult: number = 4
  const actualResult: number = sum(2, 2)
  expect(expectedResult).toBe(actualResult)
})

test('sums two positive integer numbers', () => {
  expect(sum(2, 2)).toBe(4)
  expect('Alice').toBe('Alice')
})

test('sums two positive numbers: passed', () => {
  // Some decimal sums (like 0.1 + 2.1) don’t trigger floating-point
  // precision issues in JavaScript,
  expect(sum(0.1, 2.1)).toBe(2.2)
})

test('sums two positive numbers: failing test', () => {
  // Don't use toBe with floating-point numbers
  // test will fail
  expect(sum(0.1, 0.2)).toBe(0.3)
})

test('sums two positive numbers with close to: default precision', () => {
  // toBeCloseTo is specifically designed to handle floating-point precision issues
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // default rounding is 2
})

test('sums two positive numbers with close to: precision', () => {
  // this will fail: high precision
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 20)
})
