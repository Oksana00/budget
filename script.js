'use strict';

let start_Btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let expItem_Btn = document.getElementsByTagName('button')[0],
    optExpens_Btn = document.getElementsByTagName('button')[1],
    countBudg_Btn = document.getElementsByTagName('button')[2];

let optExpensItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

expItem_Btn.disabled = true;
optExpens_Btn.disabled = true;
countBudg_Btn.disabled = true;


start_Btn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY.MM.DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    expItem_Btn.disabled = false;
    optExpens_Btn.disabled = false;
    countBudg_Btn.disabled = false;

});

expItem_Btn.addEventListener('click', function(){
    let sumExpens = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sumExpens += +b;
        } else {
            alert("Введены не корректные данные");
            i = i - 1;
        }
       expensesValue.textContent = sumExpens; 
    }
    
});

optExpens_Btn.addEventListener('click', function(){
    for (let i = 0; i < optExpensItem.length; i++) {
        let a = optExpensItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }

});

countBudg_Btn.addEventListener('click', function() {

if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
} else {
    daybudgetValue.textContent = "Произошла ошибка";
}
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sumInput = +sum.value,
            percentInput = +percent.value;
        appData.monthIncome = sumInput / 100 / 12 * percentInput;
        appData.yearIncome = sumInput / 100 * percentInput;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sumInput = +sum.value,
        percentInput = +percent.value;
    appData.monthIncome = sumInput / 100 / 12 * percentInput;
    appData.yearIncome = sumInput / 100 * percentInput;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key);
// }


// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appDate.expenses[a] = b;
//     } else {
//         alert("Введены не корректные данные");
//         i--;
//     }

//     i++;
// };


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appDate.expenses[a] = b;
//     } else {
//         alert("Введены не корректные данные");
//         i--;
//     }

//     i++;
// }
// while (i < 2);



