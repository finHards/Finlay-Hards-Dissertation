<?php
    session_start();

    if($_POST['phpfunction'] == 'checkLogin') {
        checkLogin();
    } else if($_POST['phpfunction'] == 'loginUser'){
        loginUser();
    }

    function loginUser(){
        include "config.php";

        $email = $_POST['email'];
        $pass = $_POST['password'];


        $sql = "SELECT password FROM users WHERE email='$email'";
        $result = mysqli_query($connection, $sql) or die(mysqli_error($connection));
        
        $hashedPassword = mysql_fetch_object($result);

        while($row = mysqli_fetch_array($result)){

            $hashedPassword = $row['password'];

            if(password_verify($pass, $hashedPassword)){

                $_SESSION['loginUser'] = $email;


                echo("https://ct6042-hards.studentsites.glos.ac.uk/profile.php");
                
            }else{
                echo("email or password does not match");
            }

        }
            
        mysqli_close($connection);
    }


    // function checkLogin(){
    //     session_start();

    //     $email = $_SESSION['email'];


    //     if( isset($email)){
    //         echo 'true';
    //     } else {
    //         echo 'false';
    //     }
    // }


?>