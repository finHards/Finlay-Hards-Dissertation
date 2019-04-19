<?php

	if($_POST['phpfunction'] == 'createUser') {
		createUser();
	}
	
	function createUser() {
		
		$email = $_POST['email'];
		$pass = password_hash(($_POST['password']), PASSWORD_DEFAULT);
		
		include "config.php";
		
		$sql = "SELECT * FROM users WHERE email='$email'";
		$query = mysqli_query($connection, $sql);

		if(mysqli_num_rows($query) > 0){
			echo ("This email already registered.");
			// return;
		}else{
			
			$sql = "INSERT INTO users".
			"(email, password) ".
			" values ".
			"('$email', '$pass')";
			
			if(mysqli_query($connection, $sql)) {
				echo ("https://ct6042-hards.studentsites.glos.ac.uk/registrationSuccess.html");
			} else {
				echo mysqli_error($connection);
				return;
			}
			
		}
		
		
		mysqli_close($connection);
	
	} 

?>