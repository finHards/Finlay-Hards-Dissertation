<?php
    session_start();
    //$login = true;
    // require('includes/session.php');

    if(isset($_SESSION['loginUser'])){
        //mysql_close($connection);
        header('Location: profile.php');
        //exit();
    }

?>

<html>
    <head>
        <title>Finlay Hards Dissertation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8"/>
    </head>

    <body>
        <nav>
            <div id="burgernav">
                <button id="dropbutton">
                    <div class="bar bar1"></div>
                    <div class="bar bar2"></div>
                    <div class="bar bar3"></div>
                </button>      
            </div>
            <h1>Log In</h1>
        </nav>

        <div class="dropdowncontent" id="dropdown">
            <a href="index.html">Home</a>
            <a href="register.php">Register</a>
            <a href="login.php">Log In</a>
        </div>

        <form name="loginForm" class="registerForm">
            <div id="formContainer">
                Email Address
                <input type="text" id="txtEmail1" placeholder="Enter Email" name="email" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Email'">
                Password
                <input type="password" id="txtPassword1" placeholder="Enter Password" name="password" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Password'">

                <button onclick="LogIn()" type="submit" class="mainButton" id="loginButton">Log In</button>

                <p>Dont have an account? <a href="register.html">Register Here</a></p>
            </div>
        </form>

        <div id="errorbox"></div>
        

    </body>

    <script src="bundle.js"></script>
</html>