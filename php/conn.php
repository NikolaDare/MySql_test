<?php

function OpenCon()
 {

  $servername="localhost";
  $username="root";
  $password="";
  $dbname="sqlitest";

  $conn = new mysqli($servername, $username, $password, $dbname) or
          die("Connection failed: " . $conn->connect_error);

 return $conn;
 }

function insert($query){


}

 function CloseCon($conn)
  {
  $conn -> close();
  }

 ?>
