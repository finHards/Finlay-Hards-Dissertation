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
    
            <h1>Information</h1>
                
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
            <h4>Aim of this application</h4>
            <p>
                This web application is used for research purposes for my dissertation, looking into the effects of self-monitoring mental health tracking applications. 
                If you could complete the survey <a href="https://www.surveymonkey.com/r/7FTD862">here</a> with your thoughts I would greatly appreciate it.
            </p>
            <hr>
            <h4>How to use</h4>
            <p>
                Use the daily diary to input your daily moods and feelings. Once input you can track your progress in the tracker. Set daily or longterm goals via the goals page and and view your progress of incomplete and completed goals.
            </p>
            <hr>
            <h4>Your data</h4>
            <p>
                Once the trial period is over (May 1st/2nd), all data and information will be deleted. You will not recieve any spam emails. I will make a post via social media when this happens.
            </p>
            <hr>
            <h4>Support links</h4>
            <p>
                If you are in need for some extra information or support regarding mental health here are some useful links. <br><br>

                <a href="https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/">NHS Mental Health</a><br>
                <a href="https://www.mentalhealth.org.uk/">Mental Health Foundation</a><br>
                <a href="https://www.mentalhealth-uk.org/">Mental Health UK</a><br>
                <a href="https://www.samaritans.org/">Samaritans</a><br>
                <a href="https://www.headspace.com/">Headspace</a><br>
                <a href="https://papyrus-uk.org/">Papyrus Uk</a><br><br>
                
                Text: 116 123 to get in touch with Samaritans if you are suffering from suicidal thoughts.
            </p>
        </div>



    </body>



    <script src="bundle.js"></script>
</html>