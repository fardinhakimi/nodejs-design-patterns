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
exports.WithSugar = exports.WithMilk = exports.Decorator = exports.Mocha = exports.Coffee = void 0;
// Compoent
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    return Coffee;
}());
exports.Coffee = Coffee;
// Concrete Component
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mocha.prototype.cost = function () {
        return 10;
    };
    return Mocha;
}(Coffee));
exports.Mocha = Mocha;
// Decorator
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(decorated) {
        var _this = _super.call(this) || this;
        _this.decorated = decorated;
        return _this;
    }
    return Decorator;
}(Coffee));
exports.Decorator = Decorator;
var WithMilk = /** @class */ (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk(decorated) {
        return _super.call(this, decorated) || this;
    }
    WithMilk.prototype.cost = function () {
        return this.decorated.cost() + 10;
    };
    return WithMilk;
}(Decorator));
exports.WithMilk = WithMilk;
var WithSugar = /** @class */ (function (_super) {
    __extends(WithSugar, _super);
    function WithSugar(decorated) {
        return _super.call(this, decorated) || this;
    }
    WithSugar.prototype.cost = function () {
        return this.decorated.cost() + 2;
    };
    return WithSugar;
}(Decorator));
exports.WithSugar = WithSugar;
var mochaWithMilkAndSugar = new WithSugar(new WithMilk(new Mocha()));
console.log(mochaWithMilkAndSugar.cost());
