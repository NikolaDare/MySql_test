<?php
include 'conn.php';
$conn = OpenCon();

  $username = $_GET['username'];
  $password = $_GET['password'];
  $email = $_GET['email'];

  $sql = "INSERT INTO login (username, password, email)
  VALUES ('$username', '$password', '$email')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  CloseCon($conn);
  header("Location: ../index.php");



 ?>
