// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Create a new list item
  const listItem = document.createElement('li');

  // Add task text
  const taskContent = document.createTextNode(taskText);
  listItem.appendChild(taskContent);

  // Add Complete button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('task-button');
  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });
  listItem.appendChild(completeButton);

  // Add Remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('task-button');
  removeButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });
  listItem.appendChild(removeButton);

  // Append the list item to the task list
  taskList.appendChild(listItem);

  // Clear input field
  taskInput.value = '';
}

// Add event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add event listener for the Enter key in the input field
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
