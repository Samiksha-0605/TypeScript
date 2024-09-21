var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Mobile = /** @class */ (function () {
    function Mobile(company, price, ram, rom, cam_mgpx, os, battery, processor) {
        this.company = company;
        this.price = price;
        this.ram = ram;
        this.rom = rom;
        this.cam_mgpx = cam_mgpx;
        this.os = os;
        this.battery = battery;
        this.processor = processor;
        this.preInstalledApp = [
            "PlayStore",
            "Clock",
            "Caleder",
            "Calculator",
            "Camera",
            "Gallery",
            "Settings",
        ];
    }
    Mobile.prototype.DisplayDetails = function () {
        console.log("Company :", this.company);
        console.log("Price :", this.price);
        console.log("RAM :", this.ram);
        console.log("ROM :", this.rom);
        console.log("Camera in MGPX :", this.cam_mgpx);
        console.log("OS :", this.os);
        console.log("Battery :", this.battery, "% is avaliable");
        console.log("Processor :", this.processor);
    };
    Mobile.prototype.InstallApp = function () {
        var Apps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Apps[_i] = arguments[_i];
        }
        this.preInstalledApp = __spreadArray(__spreadArray([], this.preInstalledApp, true), Apps, true);
    };
    Mobile.prototype.CheackInstalledApp = function () {
        console.log("All Installed Apps:", this.preInstalledApp);
    };
    return Mobile;
}());
var f21s = new Mobile("oppo", 27000, 8, 128, 64, "Android 14", 34, "media tech 500");
f21s.DisplayDetails();
f21s.CheackInstalledApp();
f21s.InstallApp("WhatApps", "Instagram", "SnapChat", "Telegram");
f21s.CheackInstalledApp();
f21s.InstallApp("VN", "PicsArt", "Replit", "zoom");
f21s.CheackInstalledApp();
