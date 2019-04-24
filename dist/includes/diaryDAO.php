<?php
    session_start();

    if($_POST['phpfunction'] == 'submitDiary') {
        submitDiary();
    }

    function submitDiary(){
        include "config.php";

        $mood = $_POST['mood'];
        $text = $_POST['text'];
        $email = $_SESSION['loginUser'];
        $date = date("Y,m,d");

        $sql="SELECT * FROM moods WHERE email='$email' and dateUploaded='$date'";
        $query = mysqli_query($connection, $sql);

        if(mysqli_num_rows($query) > 0){

			echo ("Currently you can only submit one diary submission a day");
			
		}else{

            $sql="INSERT into moods (email, mood, text, dateUploaded) values ('$email', '$mood', '$text', '$date')";
            $query = mysqli_query($connection, $sql);
            echo("Your diary submission was successful");
        }
    }

?>