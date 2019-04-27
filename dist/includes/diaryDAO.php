<?php
    //start a session
    session_start();
    //if a post request comes matching submitDiary run the function
    if($_POST['phpfunction'] == 'submitDiary') {
        submitDiary();
    }

    function submitDiary(){
        include "config.php";
        //get form and user details
        $mood = $_POST['mood'];
        $text = $_POST['text'];
        $email = $_SESSION['loginUser'];
        $date = date("Y,m,d");
        //encode the email address
        $email_encoded = rtrim(strtr(base64_encode($email), '+/', '-_'), '=');
        $email_decoded = base64_decode(strtr($email_encoded, '-_', '+/'));

        $text_encoded = rtrim(strtr(base64_encode($text), '+/', '-_'), '=');
        // $email_decoded = base64_decode(strtr($email_encoded, '-_', '+/'));

        //check if there is already a diary entry in the table matching their email for todays date
        $sql="SELECT * FROM moods WHERE email='$email_encoded' and dateUploaded='$date'";
        $query = mysqli_query($connection, $sql);
        //if there is an entry, display an error message
        if(mysqli_num_rows($query) > 0){

			echo ("Currently you can only submit one diary submission a day");
			
		}else{
            //if there isnt an entry upload the information to the table
            $sql="INSERT into moods (email, mood, text, dateUploaded) values ('$email_encoded', '$mood', '$text_encoded', '$date')";
            $query = mysqli_query($connection, $sql);
            echo("Your diary submission was successful");
        }
    }

?>