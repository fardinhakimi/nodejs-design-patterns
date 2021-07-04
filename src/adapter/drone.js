"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroneAdapter = exports.SuperDrone = exports.Jet = void 0;
var Jet = /** @class */ (function () {
    function Jet() {
    }
    Jet.prototype.fly = function () {
        console.log(' I am flying ... ');
    };
    return Jet;
}());
exports.Jet = Jet;
var SuperDrone = /** @class */ (function () {
    function SuperDrone() {
    }
    SuperDrone.prototype.beep = function () {
        console.log('Beep beep!');
    };
    SuperDrone.prototype.spinRotors = function () {
        console.log('Spinning rotors prepating to take off!');
    };
    SuperDrone.prototype.takeOff = function () {
        console.log('Taking off aka drone is airborne now!');
    };
    return SuperDrone;
}());
exports.SuperDrone = SuperDrone;
var DroneAdapter = /** @class */ (function () {
    function DroneAdapter(drone) {
        this.drone = drone;
    }
    DroneAdapter.prototype.fly = function () {
        this.drone.spinRotors();
        this.drone.takeOff();
    };
    return DroneAdapter;
}());
exports.DroneAdapter = DroneAdapter;
