let add = document.getElementById("add");
let enterTask = document.getElementById("entertask");
let tasks = document.getElementById("tasks");


//validate input field
function addButton() {
    if (enterTask.value.length == 0) {
        alert("please Enter a Task");
    } else {
        // create a task with click
        tasks.innerHTML += `
            <div id="task">
                <span id="taskcontent">${enterTask.value}</span>
                <button class="deletetask"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `;
        // delete a task
        let deleteTasks = document.getElementsByClassName('deletetask');
        for (let i = 0; i < deleteTasks.length; i++) {
            deleteTasks[i].onclick = function () {
                this.parentNode.remove();
            };
        }
        }

    clearData()
}

//clear data
function clearData() {
    enterTask.value = ''
}


