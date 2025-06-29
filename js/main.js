document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
  });
  
  document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirm = this.value;
    const message = document.getElementById('passwordMatchMessage');
  
    if (password !== confirm) {
      message.textContent = "Passwords do not match.";
    } else {
      message.textContent = "";
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.classList.add('was-validated');
  });
  
  function logoutUser() {
    localStorage.removeItem("corelog_loggedIn");
    window.location.href = "login.html";
  }
  