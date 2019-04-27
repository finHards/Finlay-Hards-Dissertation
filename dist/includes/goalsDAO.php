<?php
    //start a session
    session_start();

    include "config.php";
    //run the appropriate function based on the post request.
    if($_POST['phpfunction'] == 'uploadGoal') {
        uploadGoal();
    } else if($_POST['phpfunction'] == 'updateGoalData'){
        updateGoalData();
    }

    //runs this on page load AND if the update table button is pressed
    //gets the goals that match the users email (email is encoded)
    $email = $_SESSION['loginUser'];
    $email_encoded = rtrim(strtr(base64_encode($email), '+/', '-_'), '=');    
    $sql = "SELECT id, goal, progress FROM tblGoals WHERE email='$email_encoded'";

    $result = mysqli_query($connection, $sql);
    $rows = array();
    //for every row found for that user put the id, goal and progress into an array
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    //turn it into a JSON format and return it
    echo(json_encode($rows));


    //when the submit goal button is pressed run this function
    function uploadGoal(){
        include "config.php";

        $email = $_SESSION['loginUser'];
        $goal = $_POST['goal'];
        $email_encoded = rtrim(strtr(base64_encode($email), '+/', '-_'), '=');

        $sql="INSERT into tblGoals (email, goal, progress) values ('$email_encoded','$goal', 'Incomplete')";
        //if the sql executes return 'passed' else return 'failed'
        if(mysqli_query($connection, $sql)){
            echo("passed");
        } else {
            echo("failed");
        }


    }
    //when the progress button in the table update the progress to complete into the table.
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