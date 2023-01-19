function addTask() {
    var task = document.getElementById("task").value;
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    var todoList = document.getElementById("todo-list");
    var newTask = document.createElement("li");
    newTask.innerHTML = task;

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = removeTask;
    newTask.appendChild(removeButton);

    todoList.appendChild(newTask);
    document.getElementById("task").value = "";
}

function removeTask() {
    this.parentNode.remove();
}
