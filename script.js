
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
const alertContainer = document.getElementById("alert-container");

function addTask() {
    // Clear any existing alerts
    alertContainer.innerHTML = '';

    // Check if the input box is empty
    if (inputBox.value === '') {
        // Create a Bootstrap alert with close button
        const alert = document.createElement('div');
        alert.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alert.role = 'alert';
        alert.innerHTML = `
            You must write something!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Append the alert to the alert container
        alertContainer.appendChild(alert);

        // Exit the function to prevent further execution
        return;
    }

    // Add the task to the list if input is not empty
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
