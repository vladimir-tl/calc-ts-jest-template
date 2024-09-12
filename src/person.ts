export class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getDetails() {
    return { name: this.name, age: this.age }
  }
}
