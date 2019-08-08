<?php
include 'conn.php';
$conn = OpenCon();

$name = $_GET['ename'];
$time = date("Y-m-d");
echo $time;
if ($name=="") {
  echo "no email";
}else {
  $sql ="INSERT INTO email (ename, time_created) VALUES ('$name','$time')";

  mysqli_query($conn,$sql);

}




CloseCon($conn);
 ?>
