//USED FOR REFERENCE TO REFACTOR INTO nuchat.js

const socket = window.socket;
const messageBox = document.getElementById("message-thread");
const sendBtn = document.getElementById("submit");
const chat = document.getElementById("chat");
const userName = document.getElementById("user-name");
const mainContainer = document.getElementById("main-container");

// window.scrollTo(0, Number.POSITIVE_INFINITY);
addSocket();
focusMethod();

function addToChat(user, msg) {
  const div = document.createElement("div");
  div.textContent = `${user}: ${msg}`;
  messageBox.append(div);
  messageBox.scrollTo(0, messageBox.scrollHeight);
  // chat.value = "";
}

function init() {
  window.scrollTo(0, document.body.scrollHeight);
  focusMethod();

  socket.on("send-message", (messageBox) => {
    socket.broadcast.emit("recieve-message", messageBox);
  });

  socket.on("message", (payload) => {
    console.log("message from socket", payload);
  });
  socket.emit("message", "test message");
}
window.onload = addSocket;

// Join chatroom
socket.emit("joinRoom", { room: "default" });

function addSocket() {
  if (socket.connected) {
    socket.on("chatMessage", (message) => {
      messageBox.innerHTML += `<p>${message}</p>`;
    });
    init();
  } else {
    setTimeout(() => {
      addSocket();
    }, 500);
  }
}

fetch("/api/messages", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    res.forEach((element) => {
      addToChat("fetch", element.body);
    });
    chat.value = "";
    focusMethod();
  })
  .catch((err) => console.log("err", err));

fetch("/api/user/", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    res.forEach((user) => {
      userName.innerHTML += `<h5>You're chatting with:</h5> <h4>${user.username}</h4>`;
    });
  })
  .catch((err) => console.log("err", err));

fetch("/api/convos/", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
  });

//Message form submission
sendBtn.addEventListener("click", () => {
  fetch("/api/messages", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ body: chat.value }),
  }).catch((err) => console.log("err", err));
  focusMethod();
  addToChat("Ted", chat.value);
  socket.emit("message", {
    user: "Ted",
    message: chat.value,
  });
  chat.value = "";
});

sendBtn.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    messageBox.scrollTop = messageBox.scrollHeight;

    const message = chat.value;
    displayMessage(message);

    //Emit mesage to the server
    socket.emit("message", chat.value);
    fetch("/api/messages", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ body: chat.value }),
    }).catch((err) => console.log("err", err));
    chat.value = "";
    focusMethod();
  }
});

function focusMethod() {
  chat.focus();
}

function displayMessage() {
  const div = document.createElement("div");
  const message = chat.value;
  div.textContent = `$: ${message}`;
  document.getElementById("message-thread").append(div);
}
