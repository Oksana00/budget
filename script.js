'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appDate = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = prompt("Во сколько обойдется?");

appDate.expenses.answer1 = answer2;
appDate.expenses.answer3 = answer4;

console.log(appDate);
alert("Ваш бюджет на 1 день составит: " + (appDate.budget / 30));