console.log("connecting to socketio");
const socket = io();

let currentUser = null;

fetch("/check-user", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    currentUser = res.username;
  })
  .catch((err) => console.log("err", err));

fetch("/api/messages", { method: "GET" })
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    res.forEach((element) => {
      el.box.innerHTML += `<p class="old-message">${element.user}: ${element.body}</p>`;
    });
  })
  .catch((err) => console.log("err", err));

const el = {
  box: document.getElementById("message-thread"),
  input: document.getElementById("chat"),
  btn: document.getElementById("submit"),
};

socket.on("message", (payload) => {
  // console.log('user got msg:', msg)
  el.box.innerHTML += `<p class="incoming-user">${payload.user}: ${payload.msg}</p>`;
  el.box.scrollTop = el.box.scrollHeight;
});

el.btn.addEventListener("click", () => {
  fetch("/api/messages", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ body: el.input.value, user: currentUser }),
  }).catch((err) => console.log("err", err));
  console.log("user send:", el.input.value);
  el.box.innerHTML += `<p class="outgoing-user">${currentUser}: ${el.input.value}</p>`;
  socket.emit("message", { msg: el.input.value, user: currentUser });
  el.input.value = "";
  el.box.scrollTop = el.box.scrollHeight;
});
