document.addEventListener('DOMContentLoaded', function() {
  const addButton  = document.getElementById('add-task-btn');
  const taskInput  = document.getElementById('task-input');
  const taskList   = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new <li> for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Event listener for remove button
    removeBtn.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    // Append remove button to li, then append li to ul
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
    taskInput.focus();
  }

  // Add click listener on Add Task button
  addButton.addEventListener('click', addTask);

  // Allow pressing Enter key to add task
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
