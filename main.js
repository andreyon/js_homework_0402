




/*var jsName = prompt("Какое название Javascript?");
function ecmaFunction(name) {
    (name === 'ECMAScript') ?
        alert("Красавчик!") :
        alert('Ну ты и Вася!');
}
ecmaFunction(jsName);*/

/*
var jsName = prompt("Какое название Javascript?");
function ecmaFunction(name) {
    if (name === 'ECMAScript') {
        alert("Красавчик!")
    } else {
        alert('Ну ты и Вася!')
    }
}
ecmaFunction(jsName);
*/

/*
var minVal = prompt("Введите число начала диапазона: ");
var maxVal = prompt("Введите число конца диапазона: ");

function getRandom(min, max) {
    min = +min;
    max = +max;
    console.log (Math.random() * (max-min) + min);
}
getRandom(minVal, maxVal);
*/

/*
var coin = prompt("Введите число: ");
var coinRes;
if (isNaN(coin) || coin <= 0) {
    coin = console.log("Введите число!!!!!");
}
coinRes = (isNaN(coin) || coin <= 0) ?
    "Ну ты и Вася...." :
    Math.floor(Math.random() * coin) + 1;

console.log("Случайное число: ", coinRes);
*/

/*
var coin = Math.floor(Math.random()*2);
coin = coin ? "Орел" : "Решка";
console.log (coin);
*/

/*
var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;
console.log ("Кость1: ", randomNum1, ", ", "Кость2: ", randomNum2);
console.log ("Сумма: ", randomNum1+randomNum2);
*/

/*
if (a && b || c || b || e) {
    console.log ("Yeah!");
}*/
