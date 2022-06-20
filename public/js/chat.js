const messageBox = document.getElementById("message-thread");
const sendBtn = document.getElementById("submit");
const chat = document.getElementById("chat");
const userName = document.getElementById("user-name");

function addSocket() {
  if (socket.connected) {
    console.log("socket connected adding listener");
    socket.on("message", (message) => {
      console.log("chat.js", message);
      messageBox.innerHTML += `<p>${message}</p>`;
    });
  } else {
    console.log("no socket trying again");
    setTimeout(() => {
      addSocket();
    }, 500);
  }
}

addSocket();
focusMethod();

fetch("/api/messages", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    res.forEach((element) => {
      messageBox.innerHTML += `<p>${element.body}</p>`;
    });
  })
  .catch((err) => console.log("err", err));

fetch("/api/user", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    res.forEach((user) => {
      userName.innerHTML += `<h5>You're chatting with:</h5> <h4>${user.username}</h4>`;
      console.log(element);
    });
  })
  .catch((err) => console.log("err", err));

//Message form submission
sendBtn.addEventListener("click", () => {
  messageBox.scrollTop = messageBox.scrollHeight;
  console.log(socket);
  window.setTimeout(function () {
    window.location.reload();
  }, 1);

  //Get message text
  // const chatData = messageBox.value
  // const chatMessage = JSON.stringify(chatData)

  //Emit mesage to the server
  console.log(chat.value);
  socket.emit("message", chat.value);
  fetch("/api/messages", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ body: chat.value }),
  }).catch((err) => console.log("err", err));
});
// }

function focusMethod() {
  chat.focus();
}
