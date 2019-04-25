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
    
            <h1>Goals</h1>
                
        </nav>
        
        <div class="dropdowncontent" id="dropdown">
            <a href="profile.php">Profile</a>
            <a href="goals.php">Goals</a>
            <a href="tracker.php">Tracker</a>
            <a href="logout.php">log out</a>
        </div>

        <div class="siteDescription">
            <h2>Set a goal</h2>
            Setting personal goals and working towards them has been shown to be beneficial for mental health.
            <select id="goalListDropdown">
                <option>Go for a walk</option>
                <option>Meditate</option>
                <option>Complete a diary entry</option>
                <option>Get a good nights rest</option>
                <option>Do some exercise</option>
                <option>Get some fresh air</option>
                <option>Socialise with some friends</option>
                <option>Cook a healthy meal</option>
                <option>Do something you enjoy</option>
                <option>Ask for support</option>
                <option>Read a book</option>
                <option>complete a cross word</option>
                <option>Do some colouring</option>
            </select>
            <div id="errorbox"></div>
        </div>

        <button class="mainButton" id="goalSubmitButton" onclick="uploadGoal()">Set goal</button>

        <div class="siteDescription">
            Click the corresponding progress button to change from incomplete to complete
            <div id="goalTableContainer" >
                <div>Goal</div>
                <div>Progress</div>
            </div>
        </div>
        <button class="mainButton" id="GoalSubmitButton" onclick="getGoals()">Update Goals</button>

        <div id="errorbox2"></div>




    </body>




    <script src="bundle.js"></script>
</html>