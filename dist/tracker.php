<?php
    
    session_start();

    if(!isset($_SESSION['loginUser'])){
        header('Location: login.php');
    }
    
?>


<html>

    <head>
        <title>Finlay Hards Dissertation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
    
            <h1>Tracker</h1>
                
        </nav>
        
        <div class="dropdowncontent" id="dropdown">
            <a href="profile.php">Profile</a>
            <a href="">Goals</a>
            <a href="">Information</a>
            <a href="logout.php">log out</a>
        </div>




        <div id="month"></div>
        <div id="calender">

            <div> Mon </div>
            <div> Tue </div>
            <div> Wed </div>
            <div> Thu </div>
            <div> Fri </div>
            <div> Sat </div>
            <div> Sun </div>
        
        </div>


        <button class="mainButton" onclick="updateCalendar()">update</button>
    </body>

    <script src="bundle.js"></script>

</html>