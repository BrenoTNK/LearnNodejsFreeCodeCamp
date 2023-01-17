const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObjext {
    constructor() {
        console.log("This is an object");
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObjext = SomeMathObjext;

module.exports = {
    sum: sum,
    PI: PI,
    SomeMathObjext: SomeMathObjext
};
