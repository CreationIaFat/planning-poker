/* eslint-disable */
let amountOfArray = 6; // フィボナッチで見積もりたい選択肢の数をamountOfArrayに代入する。

let planningPoker = [0,1,2];
console.log("初期の配列の値は[" + planningPoker + "]です。ここから");
console.log( "配列の中身が" + amountOfArray + "個になるまで足します。")


// // パターン1：シンプルにで配列を表示する方法
// for( let i = 4; i <= amountOfArray; i++){
//     let cnt = planningPoker[planningPoker.length -1]
//     let precnt = planningPoker[planningPoker.length -2];
//     let fibonatch = cnt + precnt;
//     planningPoker.push(fibonatch);
//     console.log(i + "番の配列の値は" + planningPoker[planningPoker.length - 1]); //ここの違い
// }
// console.log("よって最終的な配列[" + planningPoker + "]")


// パターン2：　findとallow関数を用いて配列を表示する方法
for( let i = 4; i <= amountOfArray; i++){
    let cnt = planningPoker[planningPoker.length -1]
    let precnt = planningPoker[planningPoker.length -2];
    let fibonatch = cnt + precnt;
    planningPoker.push(fibonatch);
    console.log(i + "番の配列の値は" + planningPoker.find(a => a[a.length - 1])); //ここの違い
}
console.log("よって最終的な配列[" + planningPoker + "]");


// // パターン3: findとfunctionを用いて配列を表示する方法
// for( let i = 4; i <= amountOfArray; i++){
//     let cnt = planningPoker[planningPoker.length -1]
//     let precnt = planningPoker[planningPoker.length -2];
//     let fibonatch = cnt + precnt;
//     planningPoker.push(fibonatch);
//     console.log(i + "番の配列の値は" + planningPoker.find(function(a){ return a[a.length - 1]})); //ここの違い
// }
// console.log("よって最終的な配列[" + planningPoker + "]");
