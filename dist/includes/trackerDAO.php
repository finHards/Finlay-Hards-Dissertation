<?php
    session_start();

    include "config.php";

    $email = $_SESSION['loginUser'];
    $email_encoded = rtrim(strtr(base64_encode($email), '+/', '-_'), '=');


    $sql="SELECT mood, dateUploaded, text FROM moods WHERE email='$email_encoded'";
    //create an array for the desired table results
    $result = mysqli_query($connection, $sql);
    $rows = array();
    //while it searches for the diary results put them into an array
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
        
    }
    //turn the array into JSON type and return it to tracker.js
    echo(json_encode($rows));
?>
