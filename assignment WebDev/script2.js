
// //script.js

// import React from 'react';

// import LikeButton from './likeButton';
// function App() {
//    return (
//       <div>
//          <LikeButton />
//       </div>
//    );
// }
// export default App;

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todo");
const todoList = document.getElementById("todoList");
const finishedAllBtn = document.getElementById("finishedAll");

// Function to add a new task
function addTask(taskContent) {
    const li = document.createElement("li");
    li.textContent = taskContent;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.prepend(checkbox);
    
    todoList.appendChild(li);
}

// Event listener for form submission
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskContent = todoInput.value;
    addTask(taskContent);
    todoInput.value = "";
});

// Event listener for marking tasks as completed
todoList.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        const li = event.target.parentElement;
        li.classList.toggle("completed");
    }
});

// Event listener for removing completed tasks
finishedAllBtn.addEventListener("click", function() {
    const completedTasks = todoList.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
});


