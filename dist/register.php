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
            <h1>Register</h1>
        </nav>

        <div class="dropdowncontent" id="dropdown">
            <a href="index.html">Home</a>
            <a href="register.php">Register</a>
            <a href="login.php">Log In</a>
        </div>

        <form name="registerForm" class="registerForm">
            <div id="formContainer">
                Email Address
                <input type="text" id="txtEmail" placeholder="Enter Email" name="email" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Email'">
                Password
                <input type="password" id="txtPassword" placeholder="Enter Password" name="password" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Enter Password'">
                Confirm Password
                <input type="password" id ="txtConfirmPassword" placeholder="Repeat Password" name="confirmPassword" class="inputBoxes" required="required" onfocus="this.placeholder = ''" onblur="this.placeholder='Repeat Password'">
                <!-- when you press the register button go to the register function in bundle.js -->
                <button onclick="register()" type="submit" class="mainButton" id="registerButton">register</button>

                <p>Already have an account? <a href="login.html">Sign In</a></p>
                <div id="errorbox"></div>
            </div>
            
        </form>

        

        

    </body>

    <script src="bundle.js"></script>
</html>