import { loadTodoItems, saveTodoItems } from './todoModel.js';
import { createAppTitle, createTodoItemForm, createTodoList, createTodoItem } from './todoView.js';

export function initTodoApp(containerId, title, initialItems) {
    const container = document.getElementById(containerId);
    const appTitle = createAppTitle(title);
    const todoItemForm = createTodoItemForm();
    const todoList = createTodoList();

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Сбросить дела';
    resetButton.classList.add('btn', 'btn-secondary', 'mb-3');
    container.append(resetButton);

    container.append(appTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    const savedItems = loadTodoItems(initialItems);
    savedItems.forEach((itemText) => {
        const todoItem = createTodoItem(itemText);
        todoList.append(todoItem.item);
        addTodoItemListeners(todoItem, todoList);
    });

    todoItemForm.form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!todoItemForm.input.value) return;

        const todoItem = createTodoItem(todoItemForm.input.value);
        todoList.append(todoItem.item);
        addTodoItemListeners(todoItem, todoList);
        todoItemForm.input.value = '';
        saveTodoItems(todoList);
    });

    resetButton.addEventListener('click', function () {
        resetTodoItems(todoList, initialItems);
    });

    function resetTodoItems(todoList, initialItems) {
        todoList.innerHTML = '';
        localStorage.removeItem('todoItems');
        initialItems.forEach((itemText) => {
            const todoItem = createTodoItem(itemText);
            todoList.append(todoItem.item);
            addTodoItemListeners(todoItem, todoList);
        });
    }
}

function addTodoItemListeners(todoItem, todoList) {
    todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
    });

    todoItem.deleteButton.addEventListener('click', function () {
        todoItem.item.remove();
        saveTodoItems(todoList);
    });
}
