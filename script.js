// Assuming you have an HTML button with id="login-btn" for initiating the login process

// Function to handle login button click event
document.getElementById('login-btn').addEventListener('click', function() {
    // Redirect user to GitHub OAuth authorization URL
    window.location.href = '/auth/github';
});

// Once the user is authenticated and redirected back to your website,
// you can retrieve their information from the server and update the UI accordingly.
