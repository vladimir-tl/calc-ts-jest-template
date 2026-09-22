import { Account } from '../../src/class/account/account'

describe('Account', () => {

  test('creates an active account with a positive initial balance', () => {
    const account = new Account(100)

    expect(account.balance).toBe(100)
    expect(account.status).toBe('ACTIVE')
  })

  test('creates a pending account with a negative initial balance', () => {
    const account = new Account(-100)

    // verify status
  })

  test('adds money to the balance', () => {
    const account = new Account(100)

    account.deposit(50)

    // verify balance
  })

  test('withdraws money from the balance', () => {
    const account = new Account(100)

    // verify balance

   })

  test('does not change the balance when withdrawing more than available', () => {
    const account = new Account(100)

    // verify balance

  })

})
