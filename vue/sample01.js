/* eslint-disable */
new Vue({
    // Vue.jsの本体を読み込むとVue関数を使用できるようになる
    // Vueアプリを作成し、起動するにはVue関数を用いてVueインスタンスを作成する
    // Vue関数は引数としてオプションオブジェクトを受け取り、そのオプションオブジェクトの内容によりVueアプリの挙動が変わる
    //
    //　オプションオブジェクト詳細
    // https://vuejs.org/v2/api/index.html#props
    //
    // ここにvue.jsの設定を行うためのオブジェクトをかく
    el: "#app",
    data: {
        message: "Hello, Vue.js",
        AAA: "https://vuejs.org/v2/api/index.html#props",
        isFoo: true,
        isBar: false,
        bazClass: "baz",
        inStock: 0,
        // 配列の表示はダブルコーテーションで囲まないと表示されない↓
        items: ["ねこ", "犬なのに", "名前は", "ねこw", "ふふふw"]
    }
})