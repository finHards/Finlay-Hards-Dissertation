<?php

    session_start();

    include "config.php";

    if($_POST['phpfunction'] == 'uploadGoal') {
        uploadGoal();
    } else if($_POST['phpfunction'] == 'updateGoalData'){
        updateGoalData();
    }


    $email = $_SESSION['loginUser'];
        
    $sql = "SELECT id, goal, progress FROM tblGoals WHERE email='$email'";

    $result = mysqli_query($connection, $sql);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    
    echo(json_encode($rows));



    function uploadGoal(){
        include "config.php";

        $email = $_SESSION['loginUser'];
        $goal = $_POST['goal'];
        

        $sql="INSERT into tblGoals (email, goal, progress) values ('$email','$goal', 'Incomplete')";

        if(mysqli_query($connection, $sql)){
            echo("passed");
        } else {
            echo("failed");
        }


    }

    function updateGoalData(){
        include "config.php";

        $id = $_POST['id'];

        $sql="UPDATE tblGoals SET progress='Complete' WHERE id='$id'";

        if(mysqli_query($connection, $sql)){
            echo("passed");
        } else {
            echo("failed");
        }

    }
    
        






?>