import { Card } from '../../src/class/card/card'

export function createVisaCard(dailyLimit: number = 1000): Card {
  return new Card('4111111111111111', dailyLimit)
}

export function createMasterCard(dailyLimit: number = 500): Card {
  return new Card('5500000000000004', dailyLimit)
}
