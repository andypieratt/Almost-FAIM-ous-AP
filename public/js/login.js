console.log("login.js is loaded");
const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEL = document.querySelector("#username").value.trim();
  // const emailEl = document.querySelector('#email').value.trim();
  const passwordEl = document.querySelector("#password").value.trim();

  function displayMessage() {
    console.log({ usernameEL, passwordEl });
    if (!emailEl.value || !passwordEl.value) {
      alert("Required fields cannot be blank");
    } else {
      alert("Login Successful!");
    }
  }

  console.log({
    username: usernameEL,
    password: passwordEl,
  });
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEL,
      password: passwordEl,
      // username: usernameEL.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // if (email === "") {
  //   displayMessage("error", "Email cannot be blank");
  // }
  //  if (password === "") {
  //   displayMessage("error", "Password cannot be blank");
  //  }

  // displayMessage()
  console.log(response);
  if (response.ok) {
    console.log("SUCCESS");
    document.location.replace("/chat");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector('#register-button')
//   .addEventListener('click', loginFormHandler);
