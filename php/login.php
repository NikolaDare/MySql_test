<?php
include 'conn.php';
$conn = OpenCon();

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

$sql = "Select * FROM login
        WHERE username = '$username'
        AND password ='$password'";



CloseCon($conn);

 ?>
