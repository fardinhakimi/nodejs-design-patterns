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
exports.PlusCamera = exports.BasicCamera = exports.PhoneCamera = exports.ShareSocialMedia = exports.ShareByText = exports.ShareByEmail = void 0;
var ShareByEmail = /** @class */ (function () {
    function ShareByEmail() {
    }
    ShareByEmail.prototype.share = function () {
        console.log(' Sharing by email ... ');
    };
    return ShareByEmail;
}());
exports.ShareByEmail = ShareByEmail;
var ShareByText = /** @class */ (function () {
    function ShareByText() {
    }
    ShareByText.prototype.share = function () {
        console.log(' Sharing by text ...');
    };
    return ShareByText;
}());
exports.ShareByText = ShareByText;
var ShareSocialMedia = /** @class */ (function () {
    function ShareSocialMedia() {
    }
    ShareSocialMedia.prototype.share = function () {
        console.log(' Sharing to Social Media ... ');
    };
    return ShareSocialMedia;
}());
exports.ShareSocialMedia = ShareSocialMedia;
var PhoneCamera = /** @class */ (function () {
    function PhoneCamera() {
        this.shareBehavior = new ShareByText();
    }
    PhoneCamera.prototype.setShareBehavior = function (shareBehavior) {
        this.shareBehavior = shareBehavior;
    };
    PhoneCamera.prototype.performShare = function () {
        this.shareBehavior.share();
    };
    PhoneCamera.prototype.take = function () {
        console.log(' Taking a photo');
    };
    PhoneCamera.prototype.save = function () {
        console.log(' Saving a photo');
    };
    return PhoneCamera;
}());
exports.PhoneCamera = PhoneCamera;
var BasicCamera = /** @class */ (function (_super) {
    __extends(BasicCamera, _super);
    function BasicCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicCamera.prototype.edit = function () {
        console.log(' Editing photo in basic mode');
    };
    return BasicCamera;
}(PhoneCamera));
exports.BasicCamera = BasicCamera;
var PlusCamera = /** @class */ (function (_super) {
    __extends(PlusCamera, _super);
    function PlusCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlusCamera.prototype.edit = function () {
        console.log(' Editing photo in plus mode');
    };
    return PlusCamera;
}(PhoneCamera));
exports.PlusCamera = PlusCamera;
