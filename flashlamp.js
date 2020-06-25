
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
     this.light = function () {
        if (this.status) {
            this.battery.decreaseEnergy();
            document.write("<br> lighting ");
        } else {
            document.write("<br> Not lighting ");
        }
     };

     this.turnOn = function () {
         this.battery.decreaseEnergy();
        this.status = true;
     };

     this.turnOff = function () {
        this.status = false;

     }
};