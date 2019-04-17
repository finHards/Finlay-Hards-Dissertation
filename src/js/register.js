//Password Validate
//The following lines of code checks whether
//or not user entered the same password in both
//paasword and confirm password textbox
var password = document.getElementById("txtPassword");
var confirmPassword = document.getElementById("txtConfirmPassword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

document.getElementById("registerButton").onclick=function(){

    event.preventDefault();

    var hr = new XMLHttpRequest();

    var url = "/includes/registrationDAO.php";
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;
    var users = "email="+email+"&password="+password+ "&phpfunction=createUser";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function(){

      var return_data = hr.responseText;
      //document.getElementById("test").innerHTML = return_data;
        
    }
    
    hr.send(users);

    window.location.href = "./registrationSuccess.html"
    //console.log("got to the end");
}

//Event handler for registration form submit 
// $('#registerForm').submit(function(event){
// 	formData = $('#registerForm').serialize();
//     // cancels the form submission
//     event.preventDefault();

// 	$.ajax({
// 		type: "POST",
// 		url: "/includes/registrationDAO.php",
// 		data: formData+"&phpfunction=createUser",
// 	    success: function(echoedMsg){ 
// 			if(echoedMsg=='true')    {
// 				window.location="registrationSuccess.html";
// 			} else {
// 				$("#divMessage").html(echoedMsg);
// 			}
// 	    },
// 		error: function(msg){ 
// 			console.log(msg);
// 	    }
// 	});
// });



