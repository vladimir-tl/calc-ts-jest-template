export class User {
  name: string
  age: number
  isVerified: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.isVerified = false
  }

  isAdult(): boolean {
    return this.age >= 18
  }

  verify(): void {
    this.isVerified = true
  }
}
