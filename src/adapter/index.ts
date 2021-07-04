import { Plane, Jet, DroneAdapter, SuperDrone } from './drone'

export class PlaneSimulatorTest {
  protected planes: Plane[] = []
  addPlane(plane: Plane) {
    this.planes.push(plane)
  }
  run() {
    this.planes.forEach((plane: Plane ) => plane.fly())
  }
}


const planeTester = new PlaneSimulatorTest()
planeTester.addPlane(new Jet())
planeTester.addPlane(new DroneAdapter(new SuperDrone()))

planeTester.run()