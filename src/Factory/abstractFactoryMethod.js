"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaliPizzAStore = exports.NycPizzAStore = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log('Preparing pizza');
    };
    Pizza.prototype.bake = function () {
        console.log('Baking pizza');
    };
    Pizza.prototype.box = function () {
        console.log('Boxing pizza');
    };
    return Pizza;
}());
var NycChessePizza = /** @class */ (function (_super) {
    __extends(NycChessePizza, _super);
    function NycChessePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NycChessePizza;
}(Pizza));
var NycChickenPizza = /** @class */ (function (_super) {
    __extends(NycChickenPizza, _super);
    function NycChickenPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NycChickenPizza;
}(Pizza));
var CaliChessePizza = /** @class */ (function (_super) {
    __extends(CaliChessePizza, _super);
    function CaliChessePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CaliChessePizza;
}(Pizza));
var CaliChickenPizza = /** @class */ (function (_super) {
    __extends(CaliChickenPizza, _super);
    function CaliChickenPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CaliChickenPizza;
}(Pizza));
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
var NycPizzAStore = /** @class */ (function (_super) {
    __extends(NycPizzAStore, _super);
    function NycPizzAStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NycPizzAStore.prototype.createPizza = function (type) {
        if (type === 'cheese')
            return new NycChessePizza();
        if (type === 'chicken')
            return new NycChickenPizza();
        throw new Error('We do not make that type of pizza yet!');
    };
    return NycPizzAStore;
}(PizzaStore));
exports.NycPizzAStore = NycPizzAStore;
var CaliPizzAStore = /** @class */ (function (_super) {
    __extends(CaliPizzAStore, _super);
    function CaliPizzAStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaliPizzAStore.prototype.createPizza = function (type) {
        if (type === 'cheese')
            return new CaliChessePizza();
        if (type === 'chicken')
            return new CaliChickenPizza();
        throw new Error('We do not make that type of pizza yet!');
    };
    return CaliPizzAStore;
}(PizzaStore));
exports.CaliPizzAStore = CaliPizzAStore;
