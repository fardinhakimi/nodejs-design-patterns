export interface Plane {
  fly(): void
}

export class Jet implements Plane {
  fly() {
    console.log(' I am flying ... ')
  }
}

export interface Drone {
  beep(): void
  spinRotors(): void
  takeOff(): void
}

export class SuperDrone implements Drone {
  beep(): void {
    console.log('Beep beep!')
  }
  spinRotors(): void {
    console.log('Spinning rotors prepating to take off!')
  }
  takeOff(): void {
    console.log('Taking off aka drone is airborne now!')
  }
}

export class DroneAdapter implements Plane {
  private drone: Drone
  constructor(drone: Drone) {
    this.drone = drone
  }
  fly() {
    this.drone.spinRotors()
    this.drone.takeOff()
  }
}

