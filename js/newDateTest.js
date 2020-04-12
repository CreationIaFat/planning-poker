/* eslint-disable */

let myDate = new Date();
console.log(myDate.getFullYear());

const toDay = `あなたのログインタイムは${myDate.getFullYear()}年${myDate.getMonth() + 1}月${myDate.getDate()}日${myDate.getHours()}時${myDate.getMinutes()}分${myDate.getSeconds()}秒`;
document.querySelector('#toDayDate').textContent = toDay;

let madeDate = new Date(2020,4,12);
const displayMadeDate = `この日付表示機能を作成した日付は${madeDate.getFullYear()}年${madeDate.getMonth()}月${madeDate.getDate()}日`;
document.querySelector("#madeDayDate").textContent = displayMadeDate;