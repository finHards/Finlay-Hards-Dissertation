<?php

	if($_POST['phpfunction'] == 'createUser') {
		createUser();
	}
	// if($_GET['phpfunction'] == 'verifyUser') {
	// 	verifyUser();
	// }

	function createUser() {
		
		$email = $_POST['email'];
		$pass = $_POST['password'];
		
		//$verificationcode = substr(md5(uniqid(rand(), true)), 16, 16);
		
		$pass = md5($pass);
		
		include "config.php";
		
		$sql = "SELECT * FROM `users` WHERE email='$email'";
		
		$query = mysqli_query($connection, $sql);

		if(mysqli_num_rows($query) > 0){
			echo "This email already registered.";
			return;
		}
		
		$sql = "INSERT INTO `users`".
			   "(email, password) ".
			   " values ".
			   "('$email', '$pass')";
		
		if(mysqli_query($connection, $sql)) {
			echo "true";
		} else {
			echo mysqli_error($connection);
			return;
		}
		
		//sendEmail($email, $verificationcode);

		mysqli_close($connection);

		
	} 

	// function verifyUser() {
	// 	$email = $_GET['email'];
	// 	$verificationcode = $_GET['VerificationCode'];
		
	// 	include "../include/config.php";
		
	// 	$sql = "UPDATE `tbl_user` ".
	// 		   "SET IsVerified='1' ".
	// 		   " WHERE email = '$email' AND verificationcode='$verificationcode'";
		
	// 	//if(mysqli_multi_query($connection, $sql)) {
	// 	if(mysqli_query($connection, $sql)) {
	// 		echo "Your account has been successfully verified";
	// 	} else {
	// 		echo mysqli_error($connection);
	// 	}
	// } 

	// function sendEmail($emailTo, $verificationcode) {
	// 	$from="username@glos.ac.uk";
	// 	$headers = 'MIME-Version: 1.0' . "\r\n";
	// 	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// 	//Create email headers

	// 	$headers .= 'From: '.$from. "\r\n".
	// 		'Reply-To: '.$from."\r\n" .
	// 		'X-Mailer: PHP/' . phpversion();

	// 	// Compose the message of the email
		
	// 	$body = 'Thank you for registering with Flogger. <br>';
	// 	$body = $body.'Please click the link below to activate your account. <br>';
	// 	//Change this link to your URL **********************************************
	// 	$link = 'http://ct6042-hards.studentsites.glos.ac.uk/BuyAndSell/RegistrationPage/RegistrationDAO.php?'.
	// 			'phpfunction=verifyUser&email='.$emailTo.
	// 			'&VerificationCode='.$verificationcode;
	// 	$link = '<a href="'.$link.'">Click here</a>';
	// 	$body = $body.$link;
	// 	$message = '<html><body>';
	// 	$message .= $body;
	// 	$message .= '</body></html>';

	// 	if (mail($emailTo, $subject, $message, $headers)){
	// 		//Do Something
	// 	} else {
	// 		//Do Something
	// 	}
	// }

?>