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
exports.WeatherStation = exports.NewsPaper = void 0;
var BaseSubject = /** @class */ (function () {
    function BaseSubject() {
        this.observers = [];
    }
    BaseSubject.prototype.subscribe = function (reader) {
        if (!this.observers.find(function (item) { return item.id === reader.id; })) {
            this.observers.push(reader);
        }
    };
    BaseSubject.prototype.unsubscribe = function (id) {
        var idx = this.observers.findIndex(function (observer) { return observer.id === id; });
        if (idx !== -1)
            this.observers.splice(idx, 1);
    };
    BaseSubject.prototype.publish = function (content) {
        this.observers.forEach(function (observer) { return observer.update(content); });
    };
    return BaseSubject;
}());
var NewsPaper = /** @class */ (function (_super) {
    __extends(NewsPaper, _super);
    function NewsPaper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewsPaper;
}(BaseSubject));
exports.NewsPaper = NewsPaper;
var WeatherStation = /** @class */ (function (_super) {
    __extends(WeatherStation, _super);
    function WeatherStation(temperature, windSpeed, pressure) {
        var _this = _super.call(this) || this;
        _this.temperature = temperature;
        _this.windSpeed = windSpeed;
        _this.pressure = pressure;
        return _this;
    }
    WeatherStation.prototype.setTemperature = function (temperature) {
        this.temperature = temperature;
        this.publish();
    };
    WeatherStation.prototype.setWindSpeed = function (speed) {
        this.windSpeed = speed;
        this.publish();
    };
    WeatherStation.prototype.setPressure = function (pressure) {
        this.pressure = pressure;
        this.publish();
    };
    WeatherStation.prototype.publish = function () {
        var _this = this;
        this.observers.forEach(function (reader) { return reader.update("Temperature: " + _this.temperature + " \n Wind Speed: " + _this.windSpeed + " \n Pressure: " + _this.pressure); });
    };
    return WeatherStation;
}(BaseSubject));
exports.WeatherStation = WeatherStation;
