//UI vars
const form = document.querySelector('#user-form');
const userList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-users');
const filter = document.querySelector('#filter');
const userInput = document.querySelector('#user');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit' , addUser);
}

function addUser(e){
    if(userInput.value==''){
        console.log("Add a user");
    }
    else{

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(userInput.value));
        const link = document.createElement('a');
        link.className = 'explore-item secondary-content'; 
        link.innerHTML = '<i class="fa fa-database"></i>';
        li.appendChild(link);
        userList.appendChild(li);
        userInput.value = '';
        localStorage.setItem('users',JSON.stringify(userInput.value));
        alert('User saved');
    }

    e.preventDefault();
}