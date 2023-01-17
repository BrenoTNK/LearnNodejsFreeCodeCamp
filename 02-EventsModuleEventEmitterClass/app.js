const EventEmitter = require("events");
const eventEmitter = new EventEmitter;

// on() like addEventListener()
eventEmitter.on("tutorial", (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit("tutorial",1,2);
// 3


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person("Pedro");
let christina = new Person("Christina");
christina.on("name", () => {
    console.log("My names is", christina);
});
pedro.on("name", () => {
    console.log("My names is", pedro);
});

pedro.emit("name");
christina.emit("name");
