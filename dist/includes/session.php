<?php

    include "config.php";

    $email_check = $_SESSION['loginUser'];

    $sql= mysql_query("SELECT email from users WHERE email='$email_check'", $connection);

    $row = mysql_fetch_assoc($sql);

    $_SESSION['loginSession'] = $row['email'];

    if(!isset($loginSession)){
        if(!$login){
            mysql_close($connection);

            header('Location: index.html');
        }
    }

?>