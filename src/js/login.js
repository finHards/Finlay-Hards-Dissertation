
//function that is executed when the login button is pressed
//basic validation that checks the passwords entered match then sends the post request go loginDAO to check
window.LogIn = function(){  


    event.preventDefault();
      

    var hr = new XMLHttpRequest();

    var url = "/includes/loginDAO.php";
    var email = document.getElementById("txtEmail1").value;
    var password = document.getElementById("txtPassword1").value;
    var users = "email="+email+"&password="+password+ "&phpfunction=loginUser";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    
    hr.onreadystatechange = function(){

        var return_data = hr.responseText;
        //if the request was correct then go to the profile page (passed back as return_data), else place a message in the errorbox div
        if(return_data != "email or password does not match"){
            event.preventDefault();
            window.location.assign(return_data);
        } else{
            event.preventDefault();
            document.getElementById("errorbox").innerHTML = return_data;
        }

    }
    

    hr.send(users);

    
}






