export function createAppTitle(title) {
    const appTitle = document.createElement('h1');
    appTitle.textContent = title;
    return appTitle;
}

export function createTodoItemForm() {
    const form = document.createElement('form');
    form.classList.add('input-group', 'mb-3');

    const input = document.createElement('input');
    input.classList.add('form-control');
    input.placeholder = 'Введите новое дело';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('input-group-append');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return { form, input, button };
}

export function createTodoList() {
    return document.createElement('ul');
}

export function createTodoItem(name) {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('btn-group', 'btn-group-sm');

    const doneButton = document.createElement('button');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return { item, doneButton, deleteButton };
}
