// Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа
let numArray = [...(num + "")].map(Number);
console.log(numArray);
let multiplyResultArray = 1;
for (let i = 0; i < numArray.length; i++) {
  multiplyResultArray *= numArray[i];
}
console.log(multiplyResultArray);
// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let powMultiplyResultArray = multiplyResultArray ** 3;
console.log(powMultiplyResultArray);
// Вывести на экран первые 2 цифры полученного числа
console.log(powMultiplyResultArray.toString().slice(0,2));

