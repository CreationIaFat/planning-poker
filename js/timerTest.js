/* eslint-disable */

// setTimeout clearTimeout setInterval clearInterval ←　グローバル関数
//　グローバル関数とは、オブジェクトを生成したり、自分で定義しなくても呼び出せるあらかじめ組み込まれた関数をさす

// コールバック関数とは、　他の関数の引数として指定された関数のこと
// setTimeout setInterval  は指定した時間(ms)が経過したらコールバック関数を呼び出す関数
// setTimeout は一度だけコールバック関数を呼び出す
// setInterval  はブラウザのウインドウを閉じるかページを移動するまで繰り返しコールバック関数を呼び出し続ける

// コールバック関数の呼び出しをキャンセルするためには setTimeout か setInterval の戻り値を clearTimeout と clearIntervalへ渡す

// setTimeout と setInterval は呼び出した回数の分だけコールバック関数の呼び出しが予約される
// タイマーが不要になった場合は、clearTimeout や clearInterval を呼び出してタイマーをキャンセルし、
// コールバック関数が何度も呼び出されないようにする。

// 遊び

const TimerTestId = setTimeout(
    () => console.log("(タイマー氏)この俺を止められるかな"),0.1
    );
    clearTimeout(TimerTestId);
    
    
    let count = 1; // 表示する秒数を初期化
    
    let IntervalId = setInterval(
        function(){
            console.log(`${count}秒経過しました`)
            if(count >= 9){
                clearInterval(IntervalId);
                console.log("。。。")
            }
            count ++;
        }
        ,1000)

    setTimeout(() => console.log(`はい。みんなが静かになるまで${count ++}秒かかりました。`), 10000);
        
//---------------------------------------------------------------------------------------------------------------//

// スタートボタン(タイマーの時刻を決定する)
  // 現在時刻Date now() に入力した秒を加算し、タイマーの終了時刻を決定する
  // setIntervalを呼び出して処理の繰り返しを開始する

// 繰り返しの動作
  // 現在の時刻をチェックする
    // 現在の時刻 Date now() と終了時刻の差分を比較する
  // 終了時刻に達していたら通知・停止する
    // clearIntervalを呼び出し、繰り返しを停止する

// ストップボタン(タイマーをストップする)
  // clearIntervalを呼び出し、繰り返しを停止する 