abstract class Pizza {
  prepare(): void {
    console.log('Preparing pizza')
  }
  bake(): void {
    console.log('Baking pizza')
  }
  box(): void {
    console.log('Boxing pizza')
  }
}

class NycChessePizza extends Pizza { }
class NycChickenPizza extends Pizza { }
class CaliChessePizza extends Pizza { }
class CaliChickenPizza extends Pizza { }

abstract class PizzaStore {
  abstract createPizza(type: string): Pizza
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.box()
    return pizza;
  }
}

export class NycPizzAStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') return new NycChessePizza()
    if (type === 'chicken') return new NycChickenPizza()
    throw new Error('We do not make that type of pizza yet!')
  }
}

export class CaliPizzAStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') return new CaliChessePizza()
    if (type === 'chicken') return new CaliChickenPizza()
    throw new Error('We do not make that type of pizza yet!')
  }
}