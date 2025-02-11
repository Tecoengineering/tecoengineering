<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  // You can send the message to your email
  $to = " tecoengineeringlimited@gmail.com";
  $subject = "New message from $name";
  $headers = "From: $email\r\n";
  mail($to, $subject, $message, $headers);

  // Optionally, store the message in a database
  // $conn = new mysqli($servername, $username, $password, $dbname);
  // $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
  // $conn->query($sql);
}
?>