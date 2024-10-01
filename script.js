    //1. Add Item To list
    //2. Save Task To Dom** Do later **
    //3. Mark Task Complete 
    //4. Delete Task When Done

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

<<<<<<< HEAD
=======

>>>>>>> origin/main
const addTask = () => {
    const taskText = taskInput.value;
    // This will test to see if the "Task Input is blank"
    if (taskText === '') {
        alert("You Did Not Enter Anything!")
        return;
    }

        // create container for buttons, also comments don't suck
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

    // create the new list item
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.textContent = taskText;
<<<<<<< HEAD
=======
    localStorage.setItem()

>>>>>>> origin/main

    // create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn')
    removeBtn.addEventListener('click', function () {
        taskList.removeChild(listItem);
<<<<<<< HEAD
        taskList.removeChild(btnContainer);
=======
>>>>>>> origin/main
    });

    // Create complete button 
    const completedBtn = document.createElement('button');
    completedBtn.textContent = 'Completed';
    completedBtn.classList.add('completed-btn');
    completedBtn.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    

    // Add list to task List
    taskList.appendChild(listItem);

    taskList.appendChild(btnContainer);

    // Add reomve button to the list item
    btnContainer.appendChild(removeBtn);

    // Add Completed Btn to List Item
    btnContainer.appendChild(completedBtn);


    //Clear The input Fieldt After Adding To Do
    taskInput.value = '';
}

//Event Listener For "Add Task" button
addTaskBtn.addEventListener('click', addTask);