function handleRegister(event) {
    event.preventDefault();
  
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
  
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("corelog_users")) || [];
  
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert("This email is already registered.");
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem("corelog_users", JSON.stringify(users));
    alert("Account created successfully!");
  
    localStorage.setItem("corelog_loggedIn", JSON.stringify({ name, email }));
  
    window.location.href = "dashboard.html";
  }
  