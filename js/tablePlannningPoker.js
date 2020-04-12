/* eslint-disable */
let amountOfArray = 6; // フィボナッチで見積もりたい選択肢の数をamountOfArrayに代入する。

let planningPoker = [0,1,2];
console.log("初期の配列の値は[" + planningPoker + "]です。ここから");
console.log( "配列の中身が" + amountOfArray + "個になるまで足します。")


// // パターン1：シンプルに配列を表示する方法
// for( let i = 4; i <= amountOfArray; i++){
//     let cnt = planningPoker[planningPoker.length -1]
//     let precnt = planningPoker[planningPoker.length -2];
//     let fibonatch = cnt + precnt;
//     planningPoker.push(fibonatch);
//     console.log(i + "番の配列の値は" + planningPoker[planningPoker.length - 1]); //ここの違い
// }
// console.log("よって最終的な配列[" + planningPoker + "]")


// // パターン2：　findとallow関数を用いて配列を表示する方法
// for( let i = 4; i <= amountOfArray; i++){
//     let cnt = planningPoker[planningPoker.length -1]
//     let precnt = planningPoker[planningPoker.length -2];
//     let fibonatch = cnt + precnt;
//     planningPoker.push(fibonatch);
//     console.log(i + "番の配列の値は" + planningPoker.find(a => a[a.length - 1])); //ここの違い
// }
// console.log("よって最終的な配列[" + planningPoker + "]");


// // パターン3: findとfunctionを用いて配列を表示する方法
// for( let i = 4; i <= amountOfArray; i++){
//     let cnt = planningPoker[planningPoker.length -1]
//     let precnt = planningPoker[planningPoker.length -2];
//     let fibonatch = cnt + precnt;
//     planningPoker.push(fibonatch);
//     console.log(i + "番の配列の値は" + planningPoker.find(function(a){ return a[a.length - 1]})); //ここの違い
// }
// console.log("よって最終的な配列[" + planningPoker + "]");


// // パターン4: findとfunctionを用いて配列を表示する方法(関数式を利用)
//  for( let i = 4; i <= amountOfArray; i++){
//      let cnt = planningPoker[planningPoker.length -1]
//      let precnt = planningPoker[planningPoker.length -2];
//      let fibonatch = cnt + precnt;
//      planningPoker.push(fibonatch);
//      const a = function(a){//ここの違い(関数式を利用)
//          return a[a.length - 1]//ここの違い
//      }//ここの違い
//      console.log(i + "番の配列の値は" + planningPoker.find(a)); //ここの違い
//  }
//  console.log("よって最終的な配列[" + planningPoker + "]");


 // パターン5: findとfunctionを用いて配列を表示する方法(関数宣言を利用)
 for( let i = 4; i <= amountOfArray; i++){
    let cnt = planningPoker[planningPoker.length -1]
    let precnt = planningPoker[planningPoker.length -2];
    let fibonatch = cnt + precnt;
    planningPoker.push(fibonatch);
    function a(a){//ここの違い
        return a[a.length - 1]//ここの違い
    }//ここの違い
    console.log(i + "番の配列の値は" + planningPoker.find(a)); //ここの違い
}
console.log("よって最終的な配列[" + planningPoker + "]");


// 関数宣言をした場合は関数のスコープが広がり、ファイル内であればどこでも利用できる。
// 関数式を利用した場合の関数のスコープは、関数式を定義した行より後でないと、関数式は使用不可である。

