import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing', () => {
  let mathOps: MathOperations

  // Runs before each test, creating a new instance of MathOperations
  beforeEach(() => {
    mathOps = new MathOperations()
    // other actions
  })

  test.only('should add two positive numbers correctly', () => {
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add a negative and positive number correctly', () => {
    expect(mathOps.add(-3, 3)).toBe(0)
  })

})
