// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  errorMessage.textContent = "Form submitted successfully!";
  errorMessage.style.color = "green";
  document.getElementById("contactForm").reset();
});

// To-Do list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (!taskValue) return;

  const li = document.createElement("li");
  li.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
