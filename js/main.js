
// function(event) to toggle settings-open when the settings button is clicked
const openSettings = () => document.getElementById("settings").classList.toggle("settings-open");

// Event listen to trigger when settings button is clicked
document.getElementById("settings-button").addEventListener('click', openSettings);

// initialize user name variable
let userName;

// function to save the name of our user when it is entered
const saveName = () => localStorage.setItem('recievedName', userName);

userName = localStorage.getItem('recievedName');

if(userName == null ? userName = 'friend' : userName);

// function(event) to save user input as user name and then store it to local storage by calling saveName() function.
const changeName = () => {
     userName = document.getElementById('name-input').value;
     saveName();
};

const getGreeting = () => {
    document.getElementById('greet-user').textContent = `Hey ${userName}, everyday is an opportunity to be extra. 
    
    Live your best life!`;
};

//event listener telling form to prevent default setting of clearing input field upon webpage refresh when user submits name
// changeName called to save user name 
document.getElementById('name-form').addEventListener('submit', (event) => {
    event.preventDefault();
    changeName();
    getGreeting();
});






