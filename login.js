const users = [
  { username: "petlover123", password: "Pawsome123" },
  { username: "furryfriend", password: "Woofwoof1" },
  { username: "catcrazy", password: "Meow1234" },
  { username: "Abhisarg", password: "drowssap7" },
];
function isValidPassword(password) {
  const minLength = 6;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return password.length >= minLength && hasLetter && hasNumber;
}

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  if (!isValidPassword(password)) {
    alert(
      "Password must be at least 6 characters long and contain at least one letter and one number."
    );
    return;
  }

  const userExists = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userExists) {
    window.location.href = "index1.html";
  } else {
    alert("Invalid username or password.");
  }
});
