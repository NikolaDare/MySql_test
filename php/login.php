<?php
include 'conn.php';
$conn = OpenCon();

$username = $_POST['username'];
$password = $_POST['password'];

// $password= md5($password);
$sql =sprintf("SELECT * FROM `login` WHERE username='%s' AND password='%s'",
                  $username,
                  $password);

$result =  mysqli_query($conn,$sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo "id: " . $row["id"].
               "\n Name: " . $row["username"].
               "\n pass: " . $row["password"].
               "\n email: " . $row["email"]."\n";
      }
  } else {
      echo "login invalid";
  }

  if (!$result) {
    echo 'Invalid query: ' . $conn->error;
  }

CloseCon($conn);
?>
