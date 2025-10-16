// Select elements
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");
const hoverBox = document.getElementById("hoverBox");
const nameInput = document.getElementById("nameInput");
const keyOutput = document.getElementById("keyOutput");

// Click event
clickBtn.addEventListener("click", () => {
  clickMessage.classList.toggle("hidden");
});

// Mouseover & mouseout events
hoverBox.addEventListener("mouseover", () => {
  hoverBox.classList.add("highlight");
  hoverBox.textContent = "Mouse is over!";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.classList.remove("highlight");
  hoverBox.textContent = "Hover over me!";
});

// Keyboard input event
nameInput.addEventListener("keyup", (event) => {
  keyOutput.textContent = `You typed: ${event.target.value}`;
});
// === PART 3: Form Validation ===
const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name check
  if (nameField.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailField.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Message check
  if (messageField.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  // Success
  if (valid) {
    alert("✅ Message sent successfully!");
    form.reset();
  }
});
