class Car {
    constructor(manufacturer, model, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.currentSpeed = 0; // 0 KM
        this.thresholdSpeed = undefined;
        this.highSpeedAlertCallBack = undefined; // this is a function reference - means this variable holds a reference to a function
    }
    increaseSpeed() {
        this.currentSpeed += 10; // increase 10 KM
        if (this.thresholdSpeed !== undefined && this.highSpeedAlertCallBack !== undefined) {
            if (this.currentSpeed >= this.thresholdSpeed) {
                this.highSpeedAlertCallBack(this.currentSpeed);
            }
        }
    }
    setHighSpeedAlert(thresholdSpeed, notifierFunction) {
        this.thresholdSpeed = thresholdSpeed; // this.thresholdSpeed = 10;
        this.highSpeedAlertCallBack = notifierFunction;
    }
}

function test(speed) {
    console.log(`Your car is going really fast at ${speed} Km/h. Please slow down`);
}
let honda = new Car('Honda Civic 1.8 Turbo', '2022', 8000000);
honda.setHighSpeedAlert();
honda.increaseSpeed();
honda.increaseSpeed();
honda.increaseSpeed();
honda.increaseSpeed();
console.log("This the the last minimum speed",honda.currentSpeed)
honda.increaseSpeed();
console.log("now this the is highspeed",honda.currentSpeed)
