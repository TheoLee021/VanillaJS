// Constants
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// DOM Elements
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#username-input");
const greeting = document.querySelector("#greeting");

function loginSubmit(event) {
    // Prevent the default behavior of the form
    event.preventDefault();
    // Hide the login form
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // Save the username in the localStorage
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // Show the greeting message
    sayHello(username)
}

function sayHello(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Get the username value from the input
const savedUsername = localStorage.getItem(USERNAME_KEY);

// Check if the username is saved in the localStorage
// If the username is not saved, show the login form
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    // If the username is saved, show the greeting message
    sayHello(savedUsername)
}