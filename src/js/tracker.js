//get the amount of days in the user selected month
function daysInMonth(month, year){
    return new Date(year, month + 1, 0).getDate();
    
}

var calender = document.getElementById("calender");
//array of months
let monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

//function that prints the dates and adds divs to the css grid calendar
window.getCalendarMonth = function(daysThisMonth, month){

    var currentRow = 2;

    let year = date.getFullYear();
    let startDate = new Date(year, month, 1);
    startDatePosition = startDate.getDay();

    document.getElementById("month").innerHTML = monthList[month];

    //loop through for the amount of days in the month
    for(var i = 0; i < daysThisMonth; i++){
        //create a div and add it to the calendar and find the starting position of the month
        var this_day = document.createElement("div");
        this_day.classList.add("calenderEntry");
        let dayPosition = startDate.getDay() + i;
        this_day.innerHTML = startDate.getDate() + i;
        this_day.id = dayPosition + "-" + (month + 1);
        
        //add appropriate number of rows with max column length of 7 for the week
        if((startDatePosition + i) % (7 * (currentRow - 1)) == 0){
            this_day.style.gridColumn = 7;
        } else{
            this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));
        }
    
        this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));
        //if the day position gets to 6 start a new row
        if(dayPosition == 6){
            currentRow + 1;
        }
        //append the day div to the calendar
        calender.appendChild(this_day);
    
    }

}
//when a user presses the update button when selecting a month
window.updateButton = function(){
    //get date year and month information
    let date = new Date();
    let year = date.getFullYear();
    let month = document.getElementById("monthList").value;
    month = parseInt(month);

    let daysThisMonth = daysInMonth(month, year);

    // get month from dropdown
    let calenderEntriesToRemove = document.getElementsByClassName("calenderEntry");
    //reset the calendar grid
    Array.from(calenderEntriesToRemove).forEach((entry) => {

		entry.parentNode.removeChild(entry);

	})

    //get the calendar information and user data of that month
    getCalendarMonth(daysThisMonth, month);
    updateCalendar(month);
}

//ajax request to get user diary entries for selected month.
window.updateCalendar = function(month){

    if(event){
        event.preventDefault();
    }

    var hr = new XMLHttpRequest();
    var url = "/includes/trackerDAO.php";
    

    hr.open("GET", url, true);
    hr.setRequestHeader("content-type", "application/json");
    hr.responseType="json";
    
    hr.onreadystatechange = function(){


        if (this.readyState == 4 && this.status == 200) {
            
            // console.log(this.response);

            userDate = this.response;

            populateCalendar(this.response, month);
        }


    }

    hr.send();

}

window.populateCalendar = function(data, month){

    //for each user data entry for selected month
    data.forEach(function(entry){

        var date = new Date(entry.dateUploaded);
        //if information for selected month exists
        if(date.getMonth() == month){
            //get mood and diary entry data for each day
            console.log(entry);
            var mood = entry.mood;
            let month = date.getMonth();
            let day = date.getDate();

            let year = date.getFullYear();
            let startDate = new Date(year, month, 1);
            startDatePosition = startDate.getDay();

            //place the diary entry on the date
            let targetID = (day + (startDatePosition - 1) + "-" + (month + 1));
            
            console.log(targetID);
            let targetDiv = document.getElementById(targetID);
            targetDiv.innerHTML = day;
            targetDiv.classList.add("button" + mood);
            //add an click event listener for diary entry days
            targetDiv.addEventListener("click", popup);
            testingText = atob(entry.text);
            
            //change the mood from a number to relevant text
            switch (mood){
                case '1':
                    mood='Very Happy';
                    break;
                case '2':
                    mood='happy';
                    break;
                case '3':
                    mood='Upbeat';
                    break;
                case '4':
                    mood='OK';
                    break;
                case '5':
                    mood='Other';
                    break;
                case '6':
                    mood='Anxious';
                    break;
                case '7':
                    mood='Unhappy';
                    break;
                case '8':
                    mood='Sad';
                    break;
                case '9':
                    mood='Very Sad';
                    break;
            }

            //click event on diary entry, display mood and diary text in div below the calendar
            function popup(){
                moodFeelings = document.getElementById("moodFeelings");
                moodFeelings.innerHTML = ("<b>Diary notes</b><br/>" + testingText);
                moodValue = document.getElementById("moodValue");
                moodValue.innerHTML = ("<b>Mood</b><br/>" + mood);

            }
            
        }

        
        
    })

}

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
daysThisMonth = daysInMonth(month, year);
//when page loads, get the current months data
getCalendarMonth(daysThisMonth, month);
updateCalendar(month);