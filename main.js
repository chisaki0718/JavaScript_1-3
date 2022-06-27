//定数
const title = '========================\n現在持っているタスクの一覧\n========================';
const tasks = ['掃除', '買い物', '散歩'];

//「最初の段階でコンソールにタスク一覧が表示されている」の処理
console.log(title);

//タスクリスト用関数
const showtasksList = tasks => {
tasks.forEach((value, index) => {
  console.log(`${index}:${value}`);
});
};
showtasksList(tasks);

//「タスクを入力する欄がある」の定数
const task = window.prompt('タスクを入力してください');

//タスクの内容を入力するとタスクが追加され、一覧表示される
const addTask = task => {
  console.log(title);
  tasks.push(task);
  showtasksList(tasks);
  window.alert('新しいタスクを追加しました。');
};
addTask(task);

//追加後の処理
const select = window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');