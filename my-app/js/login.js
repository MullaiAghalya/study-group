const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Mock backend data
const allowedUser = {
  email: "admin@example.com",
  password: "12345",
  name: "Mullai Aghalya",
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === allowedUser.email && password === allowedUser.password) {
      message.textContent = "Login successful ✅";
      message.className = "success";

      // Store user details locally (simulate session)
      localStorage.setItem("user", JSON.stringify(allowedUser));

      // Redirect to user details page after a short delay
      setTimeout(() => {
        window.location.href = "user.html";
      }, 1000);
    } else if (email !== allowedUser.email) {
      message.textContent = "Access denied ❌ — Invalid email";
      message.className = "error";
    } else {
      message.textContent = "Incorrect password ❌";
      message.className = "error";
    }
  });
}
