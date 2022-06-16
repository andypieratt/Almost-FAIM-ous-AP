const messageBox = document.getElementById("message-thread")

const socket = io();

socket.on('message', message => {
    console.log(message);
})

//Message form submission
messageBox.addEventListener('submit', (event) => {
    event.preventDefault();

    const chat = event.target.elements.chat
})