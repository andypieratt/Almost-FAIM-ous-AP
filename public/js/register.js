const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  // const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(username, password);
  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        // email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chat");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", signupFormHandler);
