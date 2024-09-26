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


// Ex.2: Multi-level Inheritance
class Country {
    constructor(public countryName: string) {}
    getCountryName() {
        return `Country: ${this.countryName}`;
    }
}
class State extends Country {
    constructor(public countryName: string, public stateName: string) {
        super(countryName);
    }
    getStateName() {
        return `${this.getCountryName()}, State: ${this.stateName}`;
    }
}
class District extends State {
    constructor(public countryName: string, public stateName: string, public districtName: string) {
        super(countryName, stateName);
    }
    getDistrictName() {
        return `${this.getStateName()}, District: ${this.districtName}`;
    }
}
let b = new District("India","Maharashtra","Kolhapur");
console.log(b.getDistrictName());


//Ex.3: Multiple Inheritance
interface BankAccount {
    bankName: string;
    accountNo: string;
}
interface ATM {
    atmPin: number;
}
class GooglePay implements BankAccount, ATM {
    constructor(
        public bankName: string,
        public accountNo: string,
        public atmPin: number
    ) {}
    getData() {
        return `Bank_Name: ${this.bankName}, Account_No: ${this.accountNo}, ATM_Pin: ${this.atmPin}`;
    }
}
let c = new GooglePay ("Bank Of India","BkId5906",1234);
console.log(c.getData());