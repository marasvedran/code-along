let message = document.getElementById("message");
let button = document.getElementById("submit");

let messages = [];

button.addEventListener('click', function() {
    messages.push({ message: message.value });
});