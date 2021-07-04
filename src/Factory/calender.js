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
exports.MountainCalender = exports.PacificCalender = exports.Calender = void 0;
var Zone = /** @class */ (function () {
    function Zone() {
        this.displayName = '';
        this.offset = '';
    }
    Zone.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Zone.prototype.getOffset = function () {
        return this.offset;
    };
    return Zone;
}());
var ZoneUsEastern = /** @class */ (function (_super) {
    __extends(ZoneUsEastern, _super);
    function ZoneUsEastern() {
        var _this = _super.call(this) || this;
        _this.offset = '10';
        _this.displayName = 'US_EASTERN';
        return _this;
    }
    return ZoneUsEastern;
}(Zone));
var ZoneUsCentral = /** @class */ (function (_super) {
    __extends(ZoneUsCentral, _super);
    function ZoneUsCentral() {
        var _this = _super.call(this) || this;
        _this.offset = '8';
        _this.displayName = 'US_CENTRAL';
        return _this;
    }
    return ZoneUsCentral;
}(Zone));
var ZoneUsMountain = /** @class */ (function (_super) {
    __extends(ZoneUsMountain, _super);
    function ZoneUsMountain() {
        var _this = _super.call(this) || this;
        _this.offset = '7';
        _this.displayName = 'US_MOUNTAIN';
        return _this;
    }
    return ZoneUsMountain;
}(Zone));
var ZoneUsPacific = /** @class */ (function (_super) {
    __extends(ZoneUsPacific, _super);
    function ZoneUsPacific() {
        var _this = _super.call(this) || this;
        _this.offset = '4';
        _this.displayName = 'US_PACIFIC';
        return _this;
    }
    return ZoneUsPacific;
}(Zone));
var Zonefactory = /** @class */ (function () {
    function Zonefactory() {
    }
    Zonefactory.prototype.createZone = function (zoneId) {
        if (zoneId === 'PACIFIC')
            return new ZoneUsPacific();
        if (zoneId === 'MOUNTAIN')
            return new ZoneUsMountain();
        if (zoneId === 'CENTRAL')
            return new ZoneUsCentral();
        if (zoneId === 'EASTERN')
            return new ZoneUsEastern();
        throw new Error('Unsupported zone');
    };
    return Zonefactory;
}());
var Calender = /** @class */ (function () {
    function Calender() {
        this.zone = new ZoneUsEastern();
    }
    Calender.prototype.print = function () {
        var calender = this.createCalender();
        console.log(calender.zone.getDisplayName());
    };
    return Calender;
}());
exports.Calender = Calender;
var PacificCalender = /** @class */ (function (_super) {
    __extends(PacificCalender, _super);
    function PacificCalender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PacificCalender.prototype.createCalender = function () {
        this.zone = new Zonefactory().createZone('PACIFIC');
        return this;
    };
    return PacificCalender;
}(Calender));
exports.PacificCalender = PacificCalender;
var MountainCalender = /** @class */ (function (_super) {
    __extends(MountainCalender, _super);
    function MountainCalender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainCalender.prototype.createCalender = function () {
        this.zone = new Zonefactory().createZone('MOUNTAIN');
        return this;
    };
    return MountainCalender;
}(Calender));
exports.MountainCalender = MountainCalender;
