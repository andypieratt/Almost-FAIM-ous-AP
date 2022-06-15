const loginFormHandler = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log("SUCCESS")
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to login');
//   }
}
};
document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
