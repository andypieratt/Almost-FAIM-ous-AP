const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEL = document.querySelector("#username").value.trim();
  const passwordEl = document.querySelector("#password").value.trim();

  function displayMessage() {
    if (!emailEl.value || !passwordEl.value) {
      alert("Required fields cannot be blank");
    } else {
      alert("Login Successful!");
    }
  }

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEL,
      password: passwordEl,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/chat");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
