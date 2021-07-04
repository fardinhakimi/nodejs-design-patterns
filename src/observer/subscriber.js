"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertSystem = exports.Logger = exports.UserInterface = exports.Reader = void 0;
var Reader = /** @class */ (function () {
    function Reader(id, publisher) {
        this.publisher = publisher;
        this.id = id;
        this.publisher.subscribe(this);
    }
    Reader.prototype.update = function (content) {
        console.log(" " + this.id + " \n", content);
    };
    return Reader;
}());
exports.Reader = Reader;
var UserInterface = /** @class */ (function () {
    function UserInterface(subject) {
        this.id = 'userInterface_id';
        this.info = '';
        subject.subscribe(this);
    }
    UserInterface.prototype.update = function (content) {
        this.info = content;
        this.display();
    };
    UserInterface.prototype.display = function () {
        console.log(this.id + " \n", this.info);
    };
    return UserInterface;
}());
exports.UserInterface = UserInterface;
var Logger = /** @class */ (function () {
    function Logger(subject) {
        this.id = 'Logger_id';
        this.info = '';
        subject.subscribe(this);
    }
    Logger.prototype.update = function (content) {
        this.info = content;
        this.log();
    };
    Logger.prototype.log = function () {
        console.log(this.id + " \n", this.info);
    };
    return Logger;
}());
exports.Logger = Logger;
var AlertSystem = /** @class */ (function () {
    function AlertSystem(subject) {
        this.id = 'Alert_id';
        this.alertItem = '';
        subject.subscribe(this);
    }
    AlertSystem.prototype.update = function (content) {
        this.alertItem = content;
        this.alert();
    };
    AlertSystem.prototype.alert = function () {
        console.log(this.id + " \n", this.alertItem);
    };
    return AlertSystem;
}());
exports.AlertSystem = AlertSystem;
