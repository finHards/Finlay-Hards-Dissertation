
//function that is ran when the submit button is pressed when a goal is selected
//an ajax request that is sent to goalsDAO.php and uploads the selected goal to the database for that user
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
//function that gets the goals the user has previously set
//this is ran on page load and also when update table is pressed
window.getGoals = function(){
    
    //removes the current table and replaces it each time its updated
    let goalEntriesToRemove = document.getElementsByClassName("goalEntry");

    Array.from(goalEntriesToRemove).forEach((entry) => {

		entry.parentNode.removeChild(entry);

	})

    //ajax request for the goal data
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

//function that populates the goal table which is passed userdata from the getGoals function in JSON type
window.populateGoalTable = function(userData){
    //for each data entry point
    //create a div for the goal and progress passed by the ajax request, and append that to the css grid to be displayed
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
        //create a click event listener for the progress div
        divProgress.addEventListener("click", changeProgress);

        function changeProgress(){
            //changes to incomplete to complete and sets the colour of the text to green
            divProgress.innerHTML = "Complete";
            divProgress.style.color = "#5CF640";
            //runs the update progress function by passing the id of the goal
            updateProgress(id);

            
        }
    })

}
//updates the progress from incomplete to complete when pressed, using the id
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

//runs the getgoals function on load of the page
getGoals();