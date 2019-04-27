<?php
    session_start();

    include "config.php";

    $email = $_SESSION['loginUser'];
    $email_encoded = rtrim(strtr(base64_encode($email), '+/', '-_'), '=');
    
    $sql="SELECT mood, dateUploaded, text FROM moods WHERE email='$email_encoded'";

    $result = mysqli_query($connection, $sql);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    
    echo(json_encode($rows));


?>
