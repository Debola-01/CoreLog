function handleLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    const users = JSON.parse(localStorage.getItem("corelog_users")) || [];
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (!user) {
      alert("Invalid email or password.");
      return;
    }
  
    localStorage.setItem("corelog_loggedIn", JSON.stringify(user));
    alert("Login successful!");
  
    window.location.href = "dashboard.html";
  }
  