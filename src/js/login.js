

document.getElementById("loginButton").onclick=function(){  


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

        if(return_data != "email or password does not match"){
            window.location.assign(return_data);
        } else{
            document.getElementById("errorbox").innerHTML = return_data;
        }

    }
    

    hr.send(users);

    
}






