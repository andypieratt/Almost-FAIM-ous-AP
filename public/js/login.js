const loginFormHandler = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');
  const usernameEL = document.querySelector('#username');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: emailEl.value,
      password: passwordEl.value,
      username: usernameEL.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

 if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
 } else if (username === "") {
   displayMessage("Username cannot be blank")
 }
 else {
    displayMessage("success", "Registered successfully");



  // if (response.ok) {
  //   console.log("SUCCESS")
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to login');
//   }
}
};
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
