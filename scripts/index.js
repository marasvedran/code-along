let message = document.getElementById("message");
let button = document.getElementById("submit");
let output = document.getElementById("messageOutput");

let messages = [];

button.addEventListener('click', function() {
    messages.push({ message: message.value });
    output.innerHTML = "";
    for(let message of messages) {
        output.innerHTML += `Your messages:
        <p>${message.message}</p>
        `;
    }
    message.value = "";
});
