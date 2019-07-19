<?php
include 'conn.php';
$conn = OpenCon();

  $username = $_POST['username'];
  $password = $_POST['password'];
  $email = $_POST['email'];
  $password = md5($password);

  $sql = "INSERT INTO login (username, password, email)
  VALUES ('$username', '$password', '$email')";

  if ($conn->query($sql) === TRUE) {
      echo "index.html";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  CloseCon($conn);

 ?>
