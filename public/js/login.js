const loginFormHandler = async function (event) {
  event.preventDefault();

  // const usernameEL = document.querySelector('#username');
  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');
  
  function displayMessage(){
    console.log({email, passwordEl})
    if(!emailEl.value || !passwordEl.value){
      alert("Required fields cannot be blank")
    } else {
      alert("Login Succesful!")
    }
  }

  const response = fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
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
 
  displayMessage()

  if (response.ok) {
      console.log("SUCCESS")
        document.location.replace('/dashboard');
      } else {
        alert('Failed to login');
      }
  };

document
  .querySelector('#submit-button')
  .addEventListener('click', loginFormHandler);

// document
//   .querySelector('#register-button')
//   .addEventListener('click', loginFormHandler);