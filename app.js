//Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event Listeners
  loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear Text event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event LEFT OFF HERE NEED TO MAKE FUNCTION OF EVENT!!!!
  filter.addEvenetListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
  if (taskInput.value === " ") {
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement("li");
  //Add class
  li.className = "collection-item";
  //Creat text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  //add class
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  //Append the link to Li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}

//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('are you sure?')){ e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTasks(e) {
  // taskList.innerHTML('');
  //faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  //https://jsperf.com/innerhtml-vs-removechild

  }


