<?php

	if($_POST['phpfunction'] == 'createUser') {
		createUser();
	}
	//function that runs when a user is created
	function createUser() {
		//hash the password
		$email = $_POST['email'];
		$pass = password_hash(($_POST['password']), PASSWORD_DEFAULT);
		
		include "config.php";
		
		$sql = "SELECT * FROM users WHERE email='$email'";
		$query = mysqli_query($connection, $sql);
		//check if the email already exists
		if(mysqli_num_rows($query) > 0){
			echo ("This email already registered.");
			
		}else{
			//if it doesnt exist insert the data into the database
			$sql = "INSERT INTO users".
			"(email, password) ".
			" values ".
			"('$email', '$pass')";
			
			if(mysqli_query($connection, $sql)) {
				//send them to a new page stating registration success
				echo ("https://ct6042-hards.studentsites.glos.ac.uk/registrationSuccess.html");
			} else {
				echo mysqli_error($connection);
				return;
			}
			
		}
		
		
		mysqli_close($connection);
	
	} 

?>