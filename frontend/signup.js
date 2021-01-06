const signupForm = document.querySelector(".user-signup form");
const signupMessage = document.querySelector(".user-signup .message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      const { username, password_digest } = response.user;
      signupMessage.textContent = `Your username is ${username}, and your password hash is ${password_digest}`;

      location.replace("index.html");
    })
    .catch((error) => {
      signupMessage.textContent = error.message;
    });

  event.target.reset();
});
