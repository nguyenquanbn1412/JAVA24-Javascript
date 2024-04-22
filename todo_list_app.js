// Display task list
function displayTaskList() {
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    let taskListElement = document.getElementById("taskList");

    if (taskList.length === 0) {
        taskListElement.innerHTML = "<li>Danh sách công việc trống</li>";
    } else {
        let html = "";
        taskList.forEach(function (task, index) {
            html += `
          <li data-index="${index}">
            <input type="checkbox" onchange="changeTaskStatus(this)" ${task.status === "completed" ? "checked" : ""}>
            ${task.title}
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
          </li>
        `;
        });
        taskListElement.innerHTML = html;
    }
}

window.onload = function () {
    displayTaskList();
};

// Add new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskTitle = taskInput.value.trim();

    if (taskTitle === "") {
        alert("Tên công việc không được để trống");
        return;
    }

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    let newTask = {
        title: taskTitle,
        status: "pending"
    };
    taskList.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));

    displayTaskList();
    taskInput.value = "";
}

// Delete task
function deleteTask(button) {
    let li = button.parentNode;
    let taskIndex = li.dataset.index;
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    let confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này?");

    if (confirmDelete) {
        taskList.splice(taskIndex, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        displayTaskList();
    }
}

// Edit task title
function editTask(button) {
    let li = button.parentNode;
    let taskIndex = li.dataset.index;
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    let task = taskList[taskIndex];
    let newTaskTitle = window.prompt("Nhập tiêu đề công việc mới:", task.title);

    if (newTaskTitle !== null) {
        task.title = newTaskTitle.trim();
        localStorage.setItem("taskList", JSON.stringify(taskList));
        displayTaskList();
    }
}

// Change task status
function changeTaskStatus(checkbox) {
    let li = checkbox.parentNode;
    let taskIndex = li.dataset.index;
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    let task = taskList[taskIndex];

    if (checkbox.checked) {
        task.status = "completed";
    } else {
        task.status = "pending";
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
}
