const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const itemsLeft = document.getElementById("items-left");
const clearCompleted = document.getElementById("clear-completed");
const filters = document.querySelectorAll(".filter");
const themeToggle = document.getElementById("theme-toggle");
let filter = "all";

function updateItemsLeft() {
  const totalActive = document.querySelectorAll("li:not(.completed)").length;
  itemsLeft.textContent = `${totalActive} items left`;
}

function createTask(text) {
  const li = document.createElement("li");

  const left = document.createElement("div");
  left.classList.add("task-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    updateItemsLeft();
    applyFilter();
  });

  const span = document.createElement("span");
  span.textContent = text;

  left.appendChild(checkbox);
  left.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/icon-cross.svg";
  deleteIcon.alt = "Delete";
  deleteBtn.appendChild(deleteIcon);

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateItemsLeft();
  });

  li.appendChild(left);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  updateItemsLeft();
  applyFilter();
}

function handleAddTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    createTask(task);
    taskInput.value = "";
  }
}

addTaskButton.addEventListener("click", handleAddTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddTask();
});

clearCompleted.addEventListener("click", () => {
  document.querySelectorAll("li.completed").forEach((li) => li.remove());
  updateItemsLeft();
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filter = button.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  const tasks = document.querySelectorAll("#task-list li");
  tasks.forEach((task) => {
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "active":
        task.style.display = task.classList.contains("completed")
          ? "none"
          : "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed")
          ? "flex"
          : "none";
        break;
    }
  });
}
