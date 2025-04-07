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

  const checkboxContainer = document.createElement("label");

  const checkbox = document.createElement("input");
  const img = document.createElement("img");
  img.src = "images/icon-check.svg";
  img.classList.add("icon-check");

  checkbox.type = "checkbox";
  checkbox.classList.add("custom-checkbox");
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      img.style.display = "block";
      checkbox.style.background = `linear-gradient(
  to bottom right,
  hsl(192, 100%, 67%),
  hsl(280, 87%, 65%)
)`;
    } else {
      img.style.display = "none";
      checkbox.style.background = "transparent";
    }
    updateItemsLeft();
    applyFilter();
  });

  img.addEventListener("click", () => {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      img.style.display = "block";
      checkbox.style.background = `linear-gradient(
  to bottom right,
  hsl(192, 100%, 67%),
  hsl(280, 87%, 65%)
)`;
    } else {
      img.style.display = "none";
      checkbox.style.background = "transparent";
    }
  });

  const span = document.createElement("span");
  span.textContent = text;
  checkboxContainer.appendChild(img);
  checkboxContainer.appendChild(checkbox);
  left.appendChild(checkboxContainer);
  left.appendChild(span);
  left.appendChild(img);

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

  if (document.body.classList.contains("dark-mode")) {
    li.classList.toggle("dark");
  }
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

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("dark");

  const icon = document.querySelector("#theme-icon");
  const listItems = document.querySelectorAll("li");

  icon.style.opacity = 0;

  setTimeout(() => {
    if (document.body.classList.contains("dark-mode")) {
      icon.src = "images/icon-sun.svg";
    } else {
      icon.src = "images/icon-moon.svg";
    }
    icon.style.opacity = 1;
  }, 200);

  listItems.forEach((li) => {
    li.classList.toggle("dark", document.body.classList.contains("dark-mode"));
  });
});
