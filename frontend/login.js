const loginForm = document.querySelector(".user-login form");
const loginMessage = document.querySelector(".user-login .message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Bad username or password");
      return response.json();
    })
    .then((response) => {
      loginMessage.textContent = `Your token is ${response.token}`;
      localStorage.setItem("token", response.token);
      location.replace("index.html");
    })
    .catch((error) => {
      loginMessage.textContent = error.message;
    });

  event.target.reset();
});
