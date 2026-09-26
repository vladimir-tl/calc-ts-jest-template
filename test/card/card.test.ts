import { Card } from '../../src/class/card/card'
import { createMasterCard, createVisaCard } from '../helper/card.helpers'

describe('Card payments and limits', () => {
  let card: Card

  beforeEach(() => {
    card = createVisaCard(1000)
  })

  test('creates a card with nothing spent', () => {
    expect(card.spentToday).toBe(0)
  })

  test('accepts a payment within the daily limit', () => {
    // TODO: pay 300, verify that pay() returns true and spentToday is 300
  })

  test('accepts a payment equal to the daily limit', () => {
    // TODO: pay 1000, verify that pay() returns true
  })

  test('declines a payment above the daily limit', () => {
    // TODO: pay 1500, verify that pay() returns false and spentToday is still 0
  })

  test('declines a payment when the total for the day exceeds the limit', () => {
    // TODO: pay 600 twice, verify that the second payment is declined
  })

  test('declines a payment with zero or negative amount', () => {
    // TODO: try to pay 0 and -50, verify the results
  })
})

describe('Card blocking', () => {
  let card: Card

  beforeEach(() => {
    card = createMasterCard(500)
  })

  test('creates an active card that is not blocked', () => {
    expect(card.isBlocked).toBe(false)
  })

  test('hides the whole card number', () => {

  })

  test('blocks the card', () => {
    // TODO: call block() and verify isBlocked
  })

  test('unblocks a blocked card', () => {
    // TODO: block the card, then call unblock() and verify isBlocked
  })

  test('declines a payment from a blocked card', () => {
    // TODO: block the card, try to pay 100, verify the result
  })

  test('accepts a payment again after unblocking', () => {
    // TODO: block, unblock, pay 100, verify the result
  })
})
