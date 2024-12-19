<?PHP
  session_unset();

  // Destroy the session
  session_destroy();
  
  // Redirect to the login page or homepage
  header("Location: ../login-page/login.html");
  exit();
?>