/* eslint-disable */
let planningPoker = [0,1,2];
console.log("初期の配列の値は[" + planningPoker + "]です。ここから");
let amountOfArray = 6;
console.log( "配列の中身が" + amountOfArray + "個になるまで足します。")
for( let i = 4; i <= amountOfArray; i++){
    let cnt = planningPoker[planningPoker.length -1]
    let precnt = planningPoker[planningPoker.length -2];
    let fibonatch = cnt + precnt;
    planningPoker.push(fibonatch);
    console.log(i + "番の配列の値は" + planningPoker[planningPoker.length - 1]);
}
console.log("よって最終的な配列[" + planningPoker + "]")
