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

			echo ("You can only submit one a day");
			
		}else{

            $sql="INSERT into moods (email, mood, text, date) values ('$email', '$mood', '$text', '$date')";
            $query = mysqli_query($connection, $sql);

        }
    }

?>