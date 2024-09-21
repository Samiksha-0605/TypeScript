//  functions

class Earphone {
  public static isBTEnable = true;
  constructor(
    public colour: string,
    public readonly company: string,
    private _price: number
  ) {}

  public set price(value) {
    this._price = value;
  }

  public get price() {
    return this._price;
  }

  SayHello() {
    console.log("Hello");
  }
  Display() {
    console.log("Company Name: ", this.company);
    console.log("colour: ", this.colour);
    console.log("Price: ", this.price);
  }
  ChangeColor(newColor: string) {
    this.colour = newColor;
  }
    // PrintBill(GST: number, GSTNo?: string) {
    //   let billAmt = this.price + this.price * GST;
    //   if (GSTNo == undefined) {
    //     console.log("we Sold Earphone for ", billAmt, "Rs");
    //   } else {
    //     console.log("we Sold Earphone for ", billAmt, "Rs with GST No: ", GSTNo);
    //   }
    // }
  PrintBill(GST: number, GSTNo: string = "MH00001") {
    let billAmt = this.price + this.price * GST;
    console.log("we Sold Earphone for ", billAmt, "Rs with GST No: ", GSTNo);
  }
}

let e1 = new Earphone("black", "boat", 4000);
e1.PrintBill(0.28);
e1.PrintBill(0.28, "123456MH");