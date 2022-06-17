
const messageBox = document.getElementById("message-thread")
const sendBtn = document.getElementById("submit")
const chat = document.getElementById('chat').value

// const socket = io()
console.log(socket)

socket.on('message', message => {
    console.log(message);
})

//Message form submission
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    //Get message text
    const chatData = event.target.chat
    const chatMessage = JSON.stringify(chatData)
    
    //Emit mesage to the server
    console.log(chatMessage)
    socket.emit('chatMessage', chat)
}) 
