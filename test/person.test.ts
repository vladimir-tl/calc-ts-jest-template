import { Person } from '../src/person'

describe('Person Class suite 1', () => {
  test('should return an object with - feature 1.1', () => {
    // Create two instances of Person
    const person1 = new Person('Alice', 30)
    const person2 = new Person('Alice', 30)

    // Test that the returned objects from both instances are equal
    expect(person1.getDetails()).toEqual(person2.getDetails()) // Passes

    // Test that two separate instances are not the same reference
    expect(person1).not.toBe(person2) // Passes
  })
  test('should return an object with - feature 1.2', () => {
    // Create two instances of Person
    const person1 = new Person('Alice', 30)
    const person2 = new Person('Alice', 30)

    // Test that the returned objects from both instances are equal
    expect(person1.getDetails()).toEqual(person2.getDetails()) // Passes

    // Test that two separate instances are not the same reference
    expect(person1).not.toBe(person2) // Passes
  })
})

describe('Person Class suite 2', () => {
  test('should return an object with - feature 2', () => {
    // Create two instances of Person
    const person1 = new Person('Alice', 30)
    const person2 = new Person('Alice', 30)

    // Test that the returned objects from both instances are equal
    expect(person1.getDetails()).toEqual(person2.getDetails()) // Passes

    // Test that two separate instances are not the same reference
    expect(person1).not.toBe(person2) // Passes
  })
})
