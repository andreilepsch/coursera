var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

var above5Filter = function (value) {
  return value > 5;
}

var filterNumberArray = numberArray.filter(above5Filter);
console.log("Filtered Number: ", filterNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List:", shoppingList);

var searchValue = "Bismol";
