

window.uploadGoal = function(){

    event.preventDefault();

    var hr = new XMLHttpRequest();
    var url = "/includes/goalsDAO.php";
    var goal = document.getElementById("goalListDropdown").value;
    var data = "goal="+goal+"&phpfunction=uploadGoal";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function(){
        var return_data = hr.responseText;

        if(return_data == "passed"){
            document.getElementById("errorbox").innerHTML = "Your goal was submitted";
        } else if(return_data == "failed"){
            document.getElementById("errorbox").innerHTML = "Error submitting the goal";
        }
    }


    hr.send(data);

}

window.getGoals = function(){

    let goalEntriesToRemove = document.getElementsByClassName("goalEntry");

    Array.from(goalEntriesToRemove).forEach((entry) => {

		entry.parentNode.removeChild(entry);

	})


    var hr = new XMLHttpRequest();
    var url = "/includes/goalsDAO.php";
    

    hr.open("GET", url, true);
    hr.setRequestHeader("content-type", "application/json");
    hr.responseType="json";

    hr.onreadystatechange = function(){


        if (this.readyState == 4 && this.status == 200) {
            
            console.log(this.response);
            userData = this.response;
            populateGoalTable(this.response);
        }


    }

    hr.send();

}

window.populateGoalTable = function(userData){

    userData.forEach(function(entry){
        var id = entry.id;
        var goal = entry.goal;
        var progress = entry.progress;
        var divGoal = document.createElement('div');
        var divProgress = document.createElement('div');
        divProgress.classList.add("goalEntry");
        divGoal.classList.add("goalEntry");
        divGoal.innerHTML = goal;
        divProgress.innerHTML = progress;
        goalTableContainer.append(divGoal);
        goalTableContainer.append(divProgress);
        if(progress =="Complete"){
            divProgress.style.color = "#5CF640";
        }

        divProgress.addEventListener("click", changeProgress);

        function changeProgress(){
            //changes to complete
            divProgress.innerHTML = "Complete";
            divProgress.style.color = "#5CF640";
            updateProgress(id);

            
        }
    })

}

window.updateProgress = function(id){

    var hr = new XMLHttpRequest();
    var url = "/includes/goalsDAO.php";
    var data = "id="+id+"&phpfunction=updateGoalData";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function(){
        var return_data = hr.responseText;

        if(return_data == "passed"){
            document.getElementById("errorbox2").innerHTML = "Your goal was completed";
        } else if(return_data == "failed"){
            document.getElementById("errorbox2").innerHTML = "Error updating the goal";
        }

        console.log(return_data);
    }


    hr.send(data);



}


getGoals();