


var users = []; // Array to store user signup details

    function addUser() {



  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Create an object with the username and password
  var user = {
    username: username,
    password: password
  };

  // Add the user object to the users array
  users.push(user);

  // Clear the form fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Display a success message or perform any other desired action
  alert("User registered successfully!");
}

function validateForm() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Loop through the users array and check for a matching username and password
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      // Redirect to the home page or perform any other desired action
      window.location.href = "info.html";
      return false;
    }
  }

  // Show an error message if no matching credentials are found
  document.getElementById("error-message").innerHTML = "Invalid username or password.";

  // Prevent the form from submitting
  return false;
}