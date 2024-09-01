
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('102');
    const taskInput = document.getElementById('101');
    const taskList = document.getElementById('A-103');
    const clearButton = document.getElementById('clear-completed');

    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        const span = document.createElement('span');
        span.className = 'item-text';
        span.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(span);

        checkbox.addEventListener('change', () => {
            span.style.textDecoration = checkbox.checked ? 'line-through' : 'underline';
        });

        return li;
    }

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Add Your Task');
            return;
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    });

    clearButton.addEventListener('click', () => {
        const tasks = document.querySelectorAll('#A-103 .checkbox:checked');
        tasks.forEach(task => task.parentElement.remove());
    });

    // Add Your Task by Pressing Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
