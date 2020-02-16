var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
var list = document.getElementById('todo-list');
var elems = [];


for (var i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.textContent = tasks[i];
    li.className = 'task';
    list.appendChild(li);
}

console.log(list);

