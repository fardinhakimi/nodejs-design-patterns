// Compoent
export abstract class Coffee {
  abstract cost(): number
}
// Concrete Component
export class Mocha extends Coffee {
  cost(): number {
    return 10
  }
}

// Decorator
export abstract class Decorator extends Coffee {
  protected decorated: Coffee
  constructor(decorated: Coffee) {
    super()
    this.decorated = decorated
  }
}

export class WithMilk extends Decorator {
  constructor(decorated: Coffee) {
    super(decorated)
  }
  cost(): number {
    return this.decorated.cost() + 10
  }
}

export class WithSugar extends Decorator {
  constructor(decorated: Coffee) {
    super(decorated)
  }
  cost(): number {
    return this.decorated.cost() + 2
  }
}

const mochaWithMilkAndSugar = new WithSugar(new WithMilk(new Mocha()))

console.log(mochaWithMilkAndSugar.cost())



