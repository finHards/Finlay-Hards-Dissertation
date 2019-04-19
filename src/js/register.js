//Password Validate
//The following lines of code checks whether
//or not user entered the same password in both
//paasword and confirm password textbox



// function validatePassword(password, confirmPassword){
//   if(password.value != confirmPassword.value) {
//     confirmPassword.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirmPassword.setCustomValidity('');
//   }
// }



window.register = function(){

    event.preventDefault();

    console.log("got here");


    var password = document.getElementById("txtPassword");
    var confirmPassword = document.getElementById("txtConfirmPassword");
    var email = document.getElementById("txtEmail");

    // if(password.value != confirmPassword.value) {
    //   confirmPassword.setCustomValidity("Passwords Don't Match");
    // } else {
    //   confirmPassword.setCustomValidity('Password valid');
    // }

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

        console.log(return_data);

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



