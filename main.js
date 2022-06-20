//定数
const tasks = [
  `=========================`,
  `現在持っているのタスク一覧`,
  `=========================`
];
const todos = ['掃除', '買い物', '散歩'];

//「最初の段階でコンソールにタスク一覧が表示されている」の処理
tasks.forEach(value => console.log(value));
todos.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

//「タスクを入力する欄がある」の定数
const answer = window.prompt('タスクを入力してください');

//タスクの内容を入力するとタスクが追加され、一覧表示される
const answers = (answer) => {
  tasks.forEach(value => console.log(value));
  todos.push(answer);
  todos.forEach((value, index) => {
    console.log(`${index}:${value}`);
  });
  window.alert('新しいタスクを追加しました。');
};

answers(answer);

//追加後の処理
const select = window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');