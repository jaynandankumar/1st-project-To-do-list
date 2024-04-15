const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = todoInput.value;
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    addTask(newTask);
    todoInput.value = '';
});

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
}