import { NycPizzAStore, CaliPizzAStore } from "./abstractFactoryMethod"
import { PacificCalender, MountainCalender} from './calender'

console.log('********** Simple Factory class **********')
export interface Plane {
  getName(): string
}

class Jet implements Plane {
  getName(): string {
    return 'Fighter Jet'
  }
}

class Cargo implements Plane {
  getName(): string {
    return 'Cargo plane'
  }
}
export class PlaneFactory {
  create(type: string): Plane {
    if (type === 'jet') return new Jet()
    if (type === 'cargo') return new Cargo()
    throw new Error('Unsupported plane type')
  }
}

const factory = new PlaneFactory()

console.log(factory.create('jet').getName())
console.log(factory.create('cargo').getName())

// Abstract Method factory pattern 
console.log('********** Abstract factory method **********')

const nycPizzaStore = new NycPizzAStore()
const caliPizzaStore = new CaliPizzAStore()
const nycCheesePizza = nycPizzaStore.createPizza('cheese')
const caliCheesePizza = caliPizzaStore.createPizza('cheese')

console.log(nycCheesePizza)
console.log(caliCheesePizza)

console.log('********** CALENDER CHALLENGE **********')


const pcfcCalender = new PacificCalender()
const mtnCalender = new MountainCalender()

pcfcCalender.print()
mtnCalender.print()

