// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt("Ваш месячный доход?");

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
let deposit = confirm("Есть ли у вас депозит в банке?");

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные “Введите обязательную статью расходов?” (например expenses1, expenses2) “Во сколько это обойдется?” (например amount1, amount2) в итоге 4 вопроса и 4 разные переменных
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

// Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль

// let money = 150000;
// let income = "freelance";
// let addExpenses = "Internet, taxi, fuel";
// let deposit = true;
// let mission = 5000000;
// let period = 12;

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log("Перид равен " + period);
// console.log("Цель заработать " + mission + " рублей");

// let budgetDay = money / 30;
// console.log(budgetDay);
