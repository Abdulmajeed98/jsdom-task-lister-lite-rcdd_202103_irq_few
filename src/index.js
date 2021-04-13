const inputText = document.getElementById('new-task-description');
const form = document.getElementById('create-task-form');
const listDiv = document.getElementById('list');
const taskUL = document.getElementById('tasks')
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputTextValue = inputText.value;
    const li = document.createElement('li');
    li.innerHTML = inputTextValue;
    tasksUL.append(li);
  });
});
