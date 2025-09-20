document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Username validation: starts with letter, can have letters, numbers, ., @
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9.@]*$/;
  if (!usernameRegex.test(username)) {
    usernameError.textContent = "Username must start with a letter and can include letters, numbers, '.', or '@'";
    valid = false;
  }

  // Password validations
  const errors = [];

  if (password.length < 8) {
    errors.push("at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("at least one number");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("at least one special character");
  }

  if (errors.length > 0) {
    passwordError.textContent = "Password must contain " + errors.join(", ");
    valid = false;
  }

  // If all validations pass
  if (valid) {
    // You can set predefined credentials here
    const correctUsername = "shrutimog@gmail.com";
    const correctPassword = "Admin@123";

    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem("authenticated", "true");
      window.location.href = "menu.html";
    } else {
      passwordError.textContent = "Incorrect username or password.";
    }
  }
});