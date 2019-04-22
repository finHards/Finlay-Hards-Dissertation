<?php
    session_start();

    include "config.php";

    $email = $_SESSION['loginUser'];
    
    $sql="SELECT mood, dateUploaded FROM moods WHERE email='$email'";

    $result = mysqli_query($connection, $sql);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    
    echo(json_encode($rows));

    // mysqli_close($connection);
// AND MONTH(date) = MONTH(getdate())
?>
