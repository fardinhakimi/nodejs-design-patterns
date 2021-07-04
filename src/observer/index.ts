import { Publisher, NewsPaper, WeatherStation } from './publisher'
import { Subscriber, Reader, UserInterface, Logger, AlertSystem } from './subscriber'


const gp: Publisher = new NewsPaper()

new Reader('fardin_id', gp)
new Reader('zohra_id', gp)
new Reader('hayah_id', gp)

gp.publish('Breaking News! Julen ar har och fortfarande ingen sno! det ar en stor kris')


console.log(' ************ Weather Station ************ ')

const weatherStation: WeatherStation = new WeatherStation(22, 20, 30)

new UserInterface(weatherStation)
new Logger(weatherStation)
new AlertSystem(weatherStation)

weatherStation.setTemperature(48)
