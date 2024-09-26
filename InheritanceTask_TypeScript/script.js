// Ex.1: Hierarchical Inheritance
// class ElectronicDevice {
//     constructor(public name: string, public price: number) {}
//     getDeviceDetails() {
//         return `Device Name: ${this.name}, Price: ${this.price}`;
//     }
// }
// class Mobile extends ElectronicDevice {
//     constructor(
//         public name: string, 
//         public price: number, 
//         public model: string
//     ) {
//         super(name, price);
//     }
//     getMobileDetails() {
//         return `${this.getDeviceDetails()}, Model Name:${this.model}`;
//     }
// }
// class Computer extends ElectronicDevice {
//     constructor(
//         public name: string,
//         public price: number,
//         public company: string
//     ) {
//         super(name, price);
//     }
//     getComputerDetails() {
//         return `${this.getDeviceDetails()}, Company Name: ${this.company}`;
//     }
// }
// let a = new Computer("Computer",40000,"HP");
// console.log(a.getComputerDetails());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Ex.2: Multi-level Inheritance
var Country = /** @class */ (function () {
    function Country(countryName) {
        this.countryName = countryName;
    }
    Country.prototype.getCountryName = function () {
        return "Country: ".concat(this.countryName);
    };
    return Country;
}());
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(countryName, stateName) {
        var _this = _super.call(this, countryName) || this;
        _this.countryName = countryName;
        _this.stateName = stateName;
        return _this;
    }
    State.prototype.getStateName = function () {
        return "".concat(this.getCountryName(), ", State: ").concat(this.stateName);
    };
    return State;
}(Country));
var District = /** @class */ (function (_super) {
    __extends(District, _super);
    function District(countryName, stateName, districtName) {
        var _this = _super.call(this, countryName, stateName) || this;
        _this.countryName = countryName;
        _this.stateName = stateName;
        _this.districtName = districtName;
        return _this;
    }
    District.prototype.getDistrictName = function () {
        return "".concat(this.getStateName(), ", District: ").concat(this.districtName);
    };
    return District;
}(State));
var b = new District("India", "Maharashtra", "Kolhapur");
console.log(b.getDistrictName());
var GooglePay = /** @class */ (function () {
    function GooglePay(bankName, accountNo, atmPin) {
        this.bankName = bankName;
        this.accountNo = accountNo;
        this.atmPin = atmPin;
    }
    GooglePay.prototype.getData = function () {
        return "Bank_Name: ".concat(this.bankName, ", Account_No: ").concat(this.accountNo, ", ATM_Pin: ").concat(this.atmPin);
    };
    return GooglePay;
}());
var c = new GooglePay("Bank Of India", "BkId5906", 1234);
console.log(c.getData());
