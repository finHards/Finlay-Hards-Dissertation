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
    
            <h1>Clarity</h1>
            
        </nav>
    
        <div class="dropdowncontent" id="dropdown">
            <a href="diary.php">Diary</a>
            <a href="goals.php">Goals</a>
            <a href="tracker.php">Tracker</a>
            <a href="supportInfo.php">Information</a>
            <a href="logout.php">log out</a>
        </div>
        
        <div class="siteDescription">
            <h2>Welcome</h2>
        </div>
        
        <div id="profileButtonContainer">
            <a href="diary.php" class="profileButtons buttonPurple1">Daily Diary <img src="images/diary.svg"></a>   
            <a href="goals.php" class="profileButtons buttonPurple2"><img src="images/goals.svg">Goals</a>
            <a href="tracker.php" class="profileButtons buttonPurple3">Tracker <img src="images/tracker.svg"></a>
        </div>

        <p id="helpText">Need some help?<a href="supportInfo.php"> Click Here</a></p>
        
        
    </body>


    <script src="bundle.js"></script>
</html>