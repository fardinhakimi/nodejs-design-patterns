"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phone_1 = require("./phone");
var basicCamera = new phone_1.BasicCamera();
basicCamera.setShareBehavior(new phone_1.ShareByEmail());
basicCamera.take();
basicCamera.edit();
basicCamera.save();
basicCamera.performShare();
// Plus camera 
console.log(' ************************************ ');
var plusComera = new phone_1.PlusCamera();
plusComera.setShareBehavior(new phone_1.ShareSocialMedia());
plusComera.take();
plusComera.edit();
plusComera.save();
plusComera.performShare();
