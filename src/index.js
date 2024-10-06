document.addEventListener('DOMContentLoaded', () => {
  let heading2 = document.querySelector("h2");
  
  heading2.addEventListener("mouseover", () => {
    heading2.style.color = "red";
  });

  heading2.addEventListener("mouseleave", () => {
    heading2.style.color = "black";
  });

  let form = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskInput = document.getElementById('new-task-description');
    let taskDescription = taskInput.value.trim(); 

    if (taskDescription) {
      let taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      let button = document.createElement('button');
      button.textContent = 'X';
      button.className = 'delete-btn';
      button.style.marginLeft = "10px"; 
      button.addEventListener('click', () => {
        taskItem.remove(); 
      });

      taskItem.appendChild(button);
      taskList.appendChild(taskItem);

      taskInput.value = '';
    } else {
      alert('Please enter a task description.'); 
    }
  });
});
