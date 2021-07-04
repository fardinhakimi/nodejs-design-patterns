import { Publisher } from "./publisher"

export interface Subscriber {
  id: string
  update(content: string): void
}

export class Reader implements Subscriber {
  id: string
  publisher: Publisher
  constructor(id: string, publisher: Publisher) {
    this.publisher = publisher
    this.id = id
    this.publisher.subscribe(this)
  }
  update(content: string): void {
    console.log(` ${this.id} \n`, content)
  }
}


export class UserInterface implements Subscriber {

  id: string
  info: string

  constructor(subject: Publisher) {
    this.id = 'userInterface_id'
    this.info = ''
    subject.subscribe(this)
  }
  
  update(content: string): void {
    this.info = content
    this.display()
  }

  display() {
    console.log(`${this.id} \n`, this.info)
  }
}

export class Logger implements Subscriber {
  id: string
  info: string

  constructor(subject: Publisher) {
    this.id = 'Logger_id'
    this.info = ''
    subject.subscribe(this)
  }
  
  update(content: string): void {
    this.info = content
    this.log()
  }

  log() {
    console.log(`${this.id} \n`, this.info)
  }
  
}


export class AlertSystem implements Subscriber {
  id: string
  alertItem: string

  constructor(subject: Publisher) {
    this.id = 'Alert_id'
    this.alertItem = ''
    subject.subscribe(this)
  }
  
  update(content: string): void {
    this.alertItem = content
    this.alert()
  }
  alert() {
    console.log(`${this.id} \n`, this.alertItem)
  }
}