`use strict`;
//VARIABLES
const form = document.getElementById(`form`);
const input = document.getElementById(`input`);
const taskLists = document.getElementById(`task-lists`);
const template = document.getElementById(`template`).content;
const fragment = document.createDocumentFragment();
let tasks = {};

document.addEventListener(`DOMContentLoaded`, () => {
  if (localStorage.getItem(`tasks`)) {
    tasks = JSON.parse(localStorage.getItem(`tasks`));
  }
  drawTasks();
});

taskLists.addEventListener(`click`, (e) => {
  btnAction(e);
});

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  /*
  console.log(e.target[0].value);
  console.log(e.target.querySelector(`input`).value);
  console.log(input.value);
*/

  setTask(e);
});

const setTask = (e) => {
  if (input.value.trim() === ``) {
    console.log(`esta vacio`);

    return;
  }
  const task = {
    id: Date.now(),
    text: input.value,
    estado: false,
  };

  tasks[task.id] = task;

  form.reset();
  input.focus();

  drawTasks();
};

const drawTasks = () => {
  localStorage.setItem(`tasks`, JSON.stringify(tasks));

  if (Object.values(tasks).length === 0) {
    taskLists.innerHTML = `
    <div class="alert alert-dark text-center">No hay tareas pendientes</div>`;

    return;
  }

  taskLists.innerHTML = null;
  Object.values(tasks).forEach((task) => {
    const clone = template.cloneNode(true);
    clone.querySelector(`p`).textContent = task.text;

    if (task.estado) {
      clone
        .querySelector(`.alert`)
        .classList.replace(`alert-warning`, `alert-primary`);
      clone
        .querySelectorAll(`.fas`)[0]
        .classList.replace(`fa-check`, `fa-undo-alt`);
      clone.querySelector(`p`).style.textDecoration = `line-through`;
    }

    clone.querySelectorAll(`.fas`)[0].dataset.id = task.id;
    clone.querySelectorAll(`.fas`)[1].dataset.id = task.id;
    fragment.appendChild(clone);
  });
  taskLists.appendChild(fragment);
};

const btnAction = (e) => {
  if (e.target.classList.contains(`fa-check`)) {
    tasks[e.target.dataset.id].estado = true;
    drawTasks();
  }
  if (e.target.classList.contains(`fa-times`)) {
    delete tasks[e.target.dataset.id];
    drawTasks();
  }
  if (e.target.classList.contains(`fa-undo-alt`)) {
    tasks[e.target.dataset.id].estado = false;
    drawTasks();
  }
  e.stopPropagation;
};
