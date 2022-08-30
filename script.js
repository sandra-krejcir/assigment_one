function isName(a, b) {
  return a;
}

console.log("My name is: " + isName("Sandra", "Krejcir"));

function isRectangle(a, b) {
  let result = a * b;
  return result;
}

console.log("The area of a rectangle is: ", isRectangle(2, 3));

function isDistance(a, b) {
  let result = a * b + "km";
  return result;
}

console.log("You have travelled " + isDistance(50, 0.5));

/* let calculator = {
  name: "Sandra",
  age: 20,
  getName: function (a, b) {
    return a;
  },
  calcRectangle: function (a, b) {
    let result = a * b;
    return result;
  },
  getDistance: function (a, b) {
    let result = a * b + "km";
    return result;
  },
};

console.log(
  "My name is " +
    calculator.getName(calculator.name, "Krejcir") +
    ", the area of the rectangle is: " +
    calculator.calcRectangle(calculator.age, 3),
  " and I have travelled " + calculator.getDistance(3000, 1.5) + "."
);
 */

let calculator = {
  name: "Sandra",
  age: 20,
  getName: isName("Sandra", "Krejcir"),
  calcRectangle: isRectangle(20, 2.5),
  getDistance: isDistance(3000, 1.5),
};

console.log(calculator);
