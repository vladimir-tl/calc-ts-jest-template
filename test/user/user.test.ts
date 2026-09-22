import { User } from '../../src/class/user/user'

describe('User', () => {
  test('creates a user with a name and age', () => {
    const user = new User('Anna', 20)

    expect(user.name).toBe('Anna')
    expect(user.age).toBe(20)
  })

  test('returns true when the user is 18 years old or older', () => {
    const user = new User('Anna', 20)

    // TODO: verify is isAdult
  })

  test('returns false when the user is younger than 18', () => {
    // TODO: create a user younger than 18 and check that isAdult() returns false.
  })


  test('verifies the user', () => {
    // TODO: create a user, call verify(), and check that isVerified is true.
  })
})
