import { Card } from '../../src/class/card/card'

export function createVisaCard(dailyLimit: number): Card {
  return new Card('4111111111111111', dailyLimit)
}

export function createMasterCard(dailyLimit: number): Card {
  return new Card('5500000000000004', dailyLimit)
}
