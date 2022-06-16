const messageBox = document.getElementById("message-thread")

const socket = io();

socket.on('message', message => {
    console.log(message);
})

//Message form submission
messageBox.addEventListener('submit', (event) => {
    event.preventDefault();

    //Get message text
    const chat = event.target.elements.chat.value;

    //Emite mesage to the server
    console.log(chat)
    socket.emit('chatMessage', chat)
}) 