/* eslint-disable */

let finish;
let intervalId;
let startButton = document.querySelector("#start-button");
startButton.addEventListener("click",startTimer());
let stopButton = document.querySelector("#stop-button");
stopButton.addEventListener("click",stopTimer());

/**
 * *タイマーを開始する
 */

function startTimer(){
    let second = document.querySelector("#time-input").value;
    console.log(second);
    // スタートした時刻とタイマーの時間を足した合計が終了時刻
    finish = Date.now() + second * 1000;
    console.log(finish);
    intervalId = setInterval(checkRemainingTime, 50);
    console.log(intervalId);

    //スタートボタンを無効化する
    setButton.disabled = ture;
}

/**
 * タイマーを終了する
 */
function stopTimer(){
    clearInterval(intervalId);

    //残り時間をリセットする
    setDisplay(0);

    //リセットボタンを有効化する
    startButton.disabled = false;
}

/*
*残り時間をチェックする繰り返し
*/

function checkRemainingTime(){
    let remain = finish - Date.now();

    // 残り時間を表示する
    let second = Math.floor(remain / 1000) + 1;
    setDisplay(second);

    // 残り時間が0秒以下になったらタイマーを終了する
    if(remain <= 0){
        stopTimer();
        alert("時間になりました");
    }
}


/**
 * 残りの時間を表示する
 */
function setDisplay(second){
    let countDown = document.querySelector("#count-down");
    countDown.textContent = second;
}