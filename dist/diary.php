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
    
            <h1>Daily Diary</h1>
            
        </nav>
    
        <div class="dropdowncontent" id="dropdown">
            <a href="profile.php">Profile</a>
            <a href="diary.php">Diary</a>
            <a href="goals.php">Goals</a>
            <a href="tracker.php">Tracker</a>
            <a href="supportInfo.php">Information</a>
            <a href="logout.php">log out</a>
        </div>

        <div class="siteDescription">
           Select a mood from the list below and write some notes to add an entry into the diary. You can view your progress via the tracker. 
           You can submit one entry a day.

        </div>
        <div id ="moodContainer">
            <input type="radio" id="vhappyMood" name="answer" value="1">
            <label for="vhappyMood" class="moodButtons button1"><img src="images/veryhappy.svg">Very happy</label>
            <input type="radio" id="happyMood" name="answer" value="2">
            <label for="happyMood" class="moodButtons button2"><img src="images/happy.svg">happy</label>
            <input type="radio" id="upbeatMood" name="answer" value="3">
            <label for="upbeatMood" class="moodButtons button3"><img src="images/upbeat.svg">upbeat</label>
            <input type="radio" id="okMood" name="answer" value="4">
            <label for="okMood" class="moodButtons button4"><img src="images/ok.svg">OK</label>
            <input type="radio" id="otherMood" name="answer" value="5">
            <label for="otherMood" class="moodButtons button5"><img src="images/other.svg">other</label>
            <input type="radio" id="anxiousMood" name="answer" value="6">
            <label for="anxiousMood" class="moodButtons button6"><img src="images/anxious.svg">anxious</label>
            <input type="radio" id="unhappyMood" name="answer" value="7">
            <label for="unhappyMood" class="moodButtons button7"><img src="images/unhappy.svg">unhappy</label>
            <input type="radio" id="sadMood" name="answer" value="8">
            <label for="sadMood" class="moodButtons button8"><img src="images/sad.svg">Sad</label>
            <input type="radio" id="verysadMood" name="answer" value="9">
            <label for="verysadMood" class="moodButtons button9"><img src="images/verysad.svg">very sad</label>
        </div>
            
        <textarea id="textZone" rows="4" placeholder="Write your feelings here" maxlength="500"></textarea>
        <div id="errorbox"></div>    
        <button class="mainButton" id="submitMood" onclick="enterMood()">Submit</button>
        
            
    </body>


    <script src="bundle.js"></script>
</html>