"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneFactory = void 0;
var abstractFactoryMethod_1 = require("./abstractFactoryMethod");
var calender_1 = require("./calender");
console.log('********** Simple Factory class **********');
var Jet = /** @class */ (function () {
    function Jet() {
    }
    Jet.prototype.getName = function () {
        return 'Fighter Jet';
    };
    return Jet;
}());
var Cargo = /** @class */ (function () {
    function Cargo() {
    }
    Cargo.prototype.getName = function () {
        return 'Cargo plane';
    };
    return Cargo;
}());
var PlaneFactory = /** @class */ (function () {
    function PlaneFactory() {
    }
    PlaneFactory.prototype.create = function (type) {
        if (type === 'jet')
            return new Jet();
        if (type === 'cargo')
            return new Cargo();
        throw new Error('Unsupported plane type');
    };
    return PlaneFactory;
}());
exports.PlaneFactory = PlaneFactory;
var factory = new PlaneFactory();
console.log(factory.create('jet').getName());
console.log(factory.create('cargo').getName());
// Abstract Method factory pattern 
console.log('********** Abstract factory method **********');
var nycPizzaStore = new abstractFactoryMethod_1.NycPizzAStore();
var caliPizzaStore = new abstractFactoryMethod_1.CaliPizzAStore();
var nycCheesePizza = nycPizzaStore.createPizza('cheese');
var caliCheesePizza = caliPizzaStore.createPizza('cheese');
console.log(nycCheesePizza);
console.log(caliCheesePizza);
console.log('********** CALENDER CHALLENGE **********');
var pcfcCalender = new calender_1.PacificCalender();
var mtnCalender = new calender_1.MountainCalender();
pcfcCalender.print();
mtnCalender.print();
