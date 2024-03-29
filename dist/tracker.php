<?php
    //start a session for the user, if there is no session return to the login screen.
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
            <a href="diary.php">Diary</a>
            <a href="goals.php">Goals</a>
            <a href="tracker.php">Tracker</a>
            <a href="supportInfo.php">Information</a>
            <a href="logout.php">log out</a>
        </div>

        
        
        <!-- css grid setup for the calendar -->
        <div class="siteDescription" id="month"></div>
        <div id="calender">
            <div> Mon </div>
            <div> Tue </div>
            <div> Wed </div>
            <div> Thu </div>
            <div> Fri </div>
            <div> Sat </div>
            <div> Sun </div>
        </div>
        <div class="siteDescription" id="trackerInformation">
            <h2>Diary Notes</h2>
            
            <hr>
            <div id="moodValue">Click a day to display your notes.</div>
            <div id="moodFeelings"></div>
            <hr>
            <h3>Select Month<h3>
            <!-- values start from 0 in javascript date function so have matched that here.  -->
            <div id="monthListContainer">
                <select id="monthList">
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
            </div>
        </div>
        <button class="mainButton" onclick="updateButton()">Change Month</button>
        
    </body>

    <script src="bundle.js"></script> 

</html>