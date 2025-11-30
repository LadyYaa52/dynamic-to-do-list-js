document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When remove button clicked — remove the task
    removeBtn.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    // Append the remove button to the <li>, then append <li> to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();
  }

  // Add Task on button click
  addButton.addEventListener('click', addTask);

  // Add Task when pressing Enter in the input field
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

       


