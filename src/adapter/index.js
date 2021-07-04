"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneSimulatorTest = void 0;
var drone_1 = require("./drone");
var PlaneSimulatorTest = /** @class */ (function () {
    function PlaneSimulatorTest() {
        this.planes = [];
    }
    PlaneSimulatorTest.prototype.addPlane = function (plane) {
        this.planes.push(plane);
    };
    PlaneSimulatorTest.prototype.run = function () {
        this.planes.forEach(function (plane) { return plane.fly(); });
    };
    return PlaneSimulatorTest;
}());
exports.PlaneSimulatorTest = PlaneSimulatorTest;
var planeTester = new PlaneSimulatorTest();
planeTester.addPlane(new drone_1.Jet());
planeTester.addPlane(new drone_1.DroneAdapter(new drone_1.SuperDrone()));
planeTester.run();
