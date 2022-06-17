console.log('login.js is loaded')
const loginFormHandler = async function (event) {
  event.preventDefault();

  // const usernameEL = document.querySelector('#username');
  const emailEl = document.querySelector('#email').value.trim();
  const passwordEl = document.querySelector('#password').value.trim();
  
  function displayMessage(){
    console.log({email, passwordEl})
    if(!emailEl.value || !passwordEl.value){
      alert("Required fields cannot be blank")
    } else {
      alert("Login Successful!")
    }
  }

  const response = fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: emailEl,
      password: passwordEl,
      // username: usernameEL.value,
    }),
    headers: { 'Content-Type': 'application/json' },
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
      console.log("SUCCESS")
        document.location.replace('/chat');
      } else {
        alert('Failed to login');
      }
  };

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('#register-button')
//   .addEventListener('click', loginFormHandler);