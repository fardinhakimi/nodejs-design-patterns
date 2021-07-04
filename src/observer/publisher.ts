import { Subscriber } from "./subscriber"

export interface Publisher {
  subscribe(reader: Subscriber): void
  unsubscribe(id: string): void
  publish(content?: string): void
}


abstract class BaseSubject implements Publisher {
  protected observers: Subscriber[] = []
  subscribe(reader: Subscriber): void {
    if (!this.observers.find(item => item.id === reader.id)) {
      this.observers.push(reader)
    }
  }
  unsubscribe(id: string): void {
    const idx = this.observers.findIndex(observer => observer.id === id)
    if(idx !== -1) this.observers.splice(idx, 1)
  }
  publish(content: string): void {
    this.observers.forEach(observer => observer.update(content))
  }
}

export class NewsPaper extends BaseSubject { 

}


export class WeatherStation extends BaseSubject {

  private temperature: number
  private windSpeed: number
  private pressure: number

  constructor(temperature: number, windSpeed: number, pressure: number) {
    super()
    this.temperature = temperature
    this.windSpeed = windSpeed
    this.pressure = pressure
  }

  public setTemperature(temperature: number) {
    this.temperature = temperature
    this.publish()
  }

  public setWindSpeed(speed: number) {
    this.windSpeed = speed
    this.publish()
  }

  public setPressure(pressure: number) {
    this.pressure = pressure
    this.publish()
  }

  publish(): void {
    this.observers.forEach(reader => reader.update(`Temperature: ${this.temperature} \n Wind Speed: ${this.windSpeed} \n Pressure: ${this.pressure}`))
  }

}