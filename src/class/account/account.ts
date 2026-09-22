export class Account {
  balance: number
  status: string

  constructor(initialBalance: number) {
    this.balance = initialBalance

    if (initialBalance < 0) {
      this.status = 'PENDING'
    } else {
      this.status = 'ACTIVE'
    }
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      return
    }

    this.balance = this.balance + amount
  }

  // implement withdrawal
}
