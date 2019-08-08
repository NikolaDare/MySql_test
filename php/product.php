<?php
include 'conn.php';
$conn = OpenCon();

$product = $_GET['prodict'];

$sql ="SELECT * FROM `product` WHERE product_name=".$product;

mysqli_query($conn,$sql);


CloseCon($conn);
 ?>
