<?php
    session_start();

    if($_POST['phpfunction'] == 'checkLogin') {
        checkLogin();
    } else if($_POST['phpfunction'] == 'loginUser'){
        loginUser();
    }
    //when the login function is called execute this code
    function loginUser(){
        include "config.php";

        $email = $_POST['email'];
        $pass = $_POST['password'];


        $sql = "SELECT password FROM users WHERE email='$email'";
        $result = mysqli_query($connection, $sql) or die(mysqli_error($connection));
        
        $hashedPassword = mysql_fetch_object($result);
        //while it searches for the correct credentials, verify the password with the hashed password stored on the database
        while($row = mysqli_fetch_array($result)){

            $hashedPassword = $row['password'];
            
            if(password_verify($pass, $hashedPassword)){
                //if successful start a new session and send them to the profile page    
                $_SESSION['loginUser'] = $email;
                echo("https://ct6042-hards.studentsites.glos.ac.uk/profile.php");
                
            }else{
                echo("email or password does not match");
            }

        }
            
        mysqli_close($connection);
    }


   


?>