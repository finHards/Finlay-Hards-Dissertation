<?php
    session_start();
    //start a session, if a session is set already go to profile page so they dont have to re-enter their details
    if(isset($_SESSION['loginUser'])){
        header('Location: profile.php');
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

        <div class="registerForm">
            <div id="formContainer">
                Email Address
                <input type="text" id="txtEmail1" placeholder="Enter Email" name="email" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Email'">
                Password
                <input type="password" id="txtPassword1" placeholder="Enter Password" name="password" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Password'">

                <button class="mainButton" id="loginButton" onclick="LogIn()">Log In</button>

                <p>Dont have an account? <a href="register.php">Register Here</a></p>

                
                <div id="errorbox"></div>
            </div>
            
        </div>
    </body>

    <script src="bundle.js"></script>
</html>