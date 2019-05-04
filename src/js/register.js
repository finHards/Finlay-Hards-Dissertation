

//function that is executed when a user registers an account to the site.
//little validation is required, so users can potentially just use a single character name, it wasn't really necessary to put real email rules for the trial period.
window.register = function(){

    event.preventDefault();


    var password = document.getElementById("txtPassword");
    var confirmPassword = document.getElementById("txtConfirmPassword");
    var email = document.getElementById("txtEmail");

    //checks if the passwords match and email isn't left empty. if so then executes the ajax request to the database to save the user details entered
    if((password.value == confirmPassword.value) && (email.value != "") && (password.value != "") && (confirmPassword.value != "")) {

      var hr = new XMLHttpRequest();

      var url = "/includes/registrationDAO.php";
      var email = document.getElementById("txtEmail").value;
      var password = document.getElementById("txtPassword").value;
      var users = "email="+email+"&password="+password+ "&phpfunction=createUser";
      hr.open("POST", url, true);
      hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

      hr.onreadystatechange = function(){

        var return_data = hr.responseText;

        // console.log(return_data);
        //checks if an account already exists for that email/username
        if(return_data != "This email already registered."){
          document.location.assign(return_data);
        } else{
            document.getElementById("errorbox").innerHTML = return_data;
        }
          


      }

      hr.send(users);  

  } else{
        document.getElementById("errorbox").innerHTML = "Passwords don't match, please try again";

  }
  
    
}



