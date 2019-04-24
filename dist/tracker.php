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
            <a href="tracker.php">Tracker</a>
            <a href="logout.php">log out</a>
        </div>

        
        

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
            <!-- <p>Click a day to display your notes.</p> -->
            <hr>
            <div id="moodValue">Click a day to display your notes.</div>
            <div id="moodFeelings"></div>
            <hr>
            <h3>Select Month<h3>
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