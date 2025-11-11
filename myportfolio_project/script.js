// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
  } else if (!email.includes("@")) {
    alert("Enter a valid email address!");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});
