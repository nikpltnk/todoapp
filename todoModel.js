export function loadTodoItems(initialItems) {
    return JSON.parse(localStorage.getItem('todoItems')) || initialItems;
}

export function saveTodoItems(todoList) {
    const items = [];
    todoList.querySelectorAll('li').forEach((li) => {
        items.push(li.firstChild.textContent);
    });
    localStorage.setItem('todoItems', JSON.stringify(items));
}
