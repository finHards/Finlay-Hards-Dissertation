<?php
	//connection to the database.
	$servername = "localhost";
	$username = "hards_hards";
	$password = "}1.ohWCZ}nNT";
	$dbname = "hards_dbDissertation";

	$connection = new mysqli($servername, $username, $password, $dbname);

	if($connection->connect_error) {
		echo $connection->connect_error;
	}
?>