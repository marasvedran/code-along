let message = document.getElementById("message");
let button = document.getElementById("submit");
let output = document.getElementById("messageOutput");

let messages = [];

let currentDate = new Date();

currentDate.getFullYear();
currentDate.getMonth();
currentDate.getDay();
currentDate.getHours();
currentDate.getMinutes();
currentDate.getSeconds();

button.addEventListener('click', function() {
    messages.push({
        message: message.value,
        timeStamp: currentDate
    });
    console.log("current date", currentDate);
    output.innerHTML = "";
    for(let message of messages) {
        output.innerHTML += `Your messages:
        <p>Message: ${message.message}</p>
        <p>Time: ${message.timeStamp}</p>
        `;
    }
    message.value = "";
});
