class Mobile {
    preInstalledApp: string[] = [
      "PlayStore",
      "Clock",
      "Caleder",
      "Calculator",
      "Camera",
      "Gallery",
      "Settings",
    ];
    constructor(
      public company: string,
      public price: number,
      public ram: number,
      public rom: number,
      public cam_mgpx: number,
      public os: string,
      public battery: number,
      public processor: string
    ) {}
    DisplayDetails() {
      console.log("Company :", this.company);
      console.log("Price :", this.price);
      console.log("RAM :", this.ram);
      console.log("ROM :", this.rom);
      console.log("Camera in MGPX :", this.cam_mgpx);
      console.log("OS :", this.os);
      console.log("Battery :", this.battery, "% is avaliable");
      console.log("Processor :", this.processor);
    }
    InstallApp(...Apps) {
      this.preInstalledApp = [...this.preInstalledApp, ...Apps];
    }
    CheackInstalledApp(){
      console.log("All Installed Apps:", this.preInstalledApp);
    }
  }
  var f21s = new Mobile(
    "oppo",
    27000,
    8,
    128,
    64,
    "Android 14",
    34,
    "media tech 500"
  );
  f21s.DisplayDetails();
  f21s.CheackInstalledApp()
  f21s.InstallApp("WhatApps", "Instagram", "SnapChat", "Telegram");
  f21s.CheackInstalledApp()
  f21s.InstallApp("VN", "PicsArt", "Replit", "zoom");
  f21s.CheackInstalledApp()