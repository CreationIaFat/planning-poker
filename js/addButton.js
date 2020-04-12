
/* eslint-disable */

document.getElementById('addButton').onclick = function(){
    // #addButtonの状態をbuttonでキャッチする
    button = document.querySelector('#addButton');
    // buttonでキャッチした内容に関して、クリックされたらeventを引数にしたアロー関数を発動
    button.addEventListener('click',event => {
        // このアロー関数では#addButtonに含まれているhtmlに右辺の値を代入している。
        //この右辺の値は#addButtonがclickイベントでキャッチした数(detail)を表示している。
        button.innerHTML = `Click count: ${event.detail}`; 
    })
}

console.log(document.getElementById('addButton').onclick);
// tagEventClick(tagCatch('#addButton'),excuteFunction(tagCatch('#addButton')))

// function tagCatch(tagName){
//     return document.querySelector(tagName);
// }

// // タグと実行したい関数を引数にとり、クリックされたときに実行したい関数を実行する。
// function tagEventClick(tagCatched, excutingFunction){
//     return tagCatch(tagCatched).addEventListener('click',excutingFunction);
// }

// // 実行したい関数(タグがクリックされた時にクリックされた回数をタグのhtmlに送りつける)
// function excuteFunction(tagCatched){
//    return tagCatched.innerHTML = `clcik button ${tagCatched.detail}`;
// }