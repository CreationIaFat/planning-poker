/* eslint-disable */
// ToDo　のjs


const todoList = []
let inputForm, todoMain, tabButton, sortMenu 

/** Todo一個単位のHTML文字列を生成する */
function createTodoHtmlString(todo) {
  // HTML文字列をプールする関数
  let htmlString = "";
  // HTMLのdata属性に設定する編集中を判定する内容
  const editType = todo.isEdit ? "editFixed" : "edit";
  // ボタンラベルを編集中かどうかで分岐する
  const editButtonLabel = todo.isEdit ? "編集完了" : "編集";
  // HTMLのdata属性に設定する完了したかどうかを判定する内容
  const doneType = todo.isDone ? "inbox" : "done";
  // ボタンのラベルを未完了か完了で分岐する
  const doneButtonLabel = todo.isDone ? "未完了" : "完了";
  // todoテキストが入るテーブルセルHTML文字列をプールする変数
  let todoTextCell = "";
  // 優先度テキストが入るテーブルセルHTML文字列をプールする変数
  let priorityCell = "";
  // 編集中かそうでないかで描画するHTMLを分岐する
  if (todo.isEdit) {
    // 該当のtodoオブジェクトが編集中の場合はテキストフィールドを描画する
    // テキストフィールドなのでユーザは文字や数値を変更できるようにする
    todoTextCell =
      '<td class="cell-text"><input class="input-edit" type="text" value=' +
      todo.text +
      " /></td>";
    priorityCell =
      '<td class="cell-priority"><input class="input-priority" type="number" value=' +
      todo.priority +
      " /></td>";
  } else {
    // 通常時の状態
    // ユーザは情報を見るだけなので普通のテキストとして表示すればOK
    todoTextCell = '<td class="cell-text">' + todo.text + "</td>";
    priorityCell = '<td class="cell-priority">' + todo.priority + "</td>";
  }
  // Todoオブジェクト1つにつき1行なので、行を生成するtrタグをまず作る
  htmlString += '<tr id="' + todo.id + '">';
  // 編集中を判定するための文字列をdata属性に埋め込んでボタンを作る
  // 非編集時は編集ボタンを、編集中は編集完了ボタンとなる
  htmlString +=
    '<td class="cell-edit-button"><button data-type="' +
    editType +
    '">' +
    editButtonLabel +
    "</button></td>";
    // 先に生成したTodoの文字列情報
  htmlString += todoTextCell;
  // Todoオブジェクトの作成日
  htmlString += '<td class="cell-created-at">' + todo.createdAt + "</td>";
  // 優先度
  htmlString += priorityCell;
  // 完了ボタンのセルを作る
  htmlString += '<td class="cell-done">';
  // Todoオブジェクトの完了状態を文字列としてdata属性に埋め込む
  htmlString += '<button data-type="' + doneType + '">';
  // 完了かそうでないかをボタンのラベルに表示する
  htmlString += doneButtonLabel;
  htmlString += "</button></td>";
  htmlString += "</tr>";
  // 作ったHTMLを返す
  return htmlString;
}

/** TodoListの描画を更新する */
function updateTodoList() {
  // HTML文字列をプールする変数
  let htmlStrings = "";
  // HTMLを書き換える
  todoList.forEach(todo => {
    // 新しいHTMLを出力
    htmlStrings += createTodoHtmlString(todo);
    todoMain.innerHTML = htmlStrings;
  })
  todoMain.innerHTML = htmlStrings;
}

/** フォームをクリアする */
function clearInputForm() {
  inputForm["input-text"].value = "";
}

/** todoListを追加する */
function addTodo(todoObj) {
  // ユニークなID
  todoObj.id = "todo-" + (todoList.length + 1);
  // 作成日
  todoObj.createdAt = new Date().toLocaleString();
  // 優先度
  todoObj.priority = 3;
  // 完了フラグ
  todoObj.isDone = false;
  // 編集中フラグ
  todoObj.isEdit = false;
  // todoList配列の先頭に挿入する
  todoList.unshift(todoObj);
  // HTMLを生成する
  updateTodoList();
  // フォームを初期化する
  clearInputForm();
}

/** Todoを登録する処理 */
function handleSubmit(event) {
// preventDefaultでブラウザのデフォルトの挙動を停止する
// preventDefault　がないとページがリロードしてしまう。

// submitボタンをクリックした時のブラウザのデフォルトの挙動は、form要素のaction属性等で指定されたURLへのデータ送信です
// ここではデータを送信する必要がないため、 preventDefault　で挙動を停止している
  event.preventDefault();
  const todoObj = {
    text: inputForm["input-text"].value
  }
  addTodo(todoObj);
}

/** DOMを変数に登録する */
function registerDOM() {
  inputForm = document.querySelector("#input-form");
  todoMain = document.querySelector("#todo-main");
  tabButton = document.querySelector("#tab").querySelectorAll("button");
  sortMenu = document.querySelector("#sort-menu");
}

/** DOMにイベントを設定する */
function bindEvents() {
  // addEventListener　はクリックするとか、キーボードをうつとかの何かしら第一引数のイベントが押された時に発動する。
  // 詳しくは、こっちを見るとわかりやすい。　
  // https://techacademy.jp/magazine/20950
  inputForm.addEventListener("submit", event => handleSubmit(event));
}

/** 初期化 */
function initialize() {
  registerDOM();
  bindEvents();
  updateTodoList();
}

// DOMContentLoaded イベントは、ブラウザがページの解析を完了した段階で <<<一度だけ>>> 発火するイベント
// 同様なイベントとして window.onloadが ある。
// window.onload　はページで使う画像を全て読み込んだ後に発火するイベントで　DOMContentLoaded　の後に実行される。
// 今回のTOdoアプリでは読み込む画像が存在しないので DOMContentLoaded が適切。

document.addEventListener("DOMContentLoaded", initialize.bind(this));