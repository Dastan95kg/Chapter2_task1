let title = document.createElement('div');
title.innerHTML = 'To Do List';
document.body.prepend(title);
// Creating list
let ol = document.createElement('ol');
title.append(ol); // adding list before <script>
let todoList = [];
let task;

while (task !== null && task !== '') {
    task = prompt('Что нужно сделать?');
    todoList.push(task);
}

todoList.pop();

for (let item of todoList) {
    let li = document.createElement('li');
    li.innerHTML = item;
    ol.appendChild(li);
}






