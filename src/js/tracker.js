
function daysInMonth(month, year){
    return new Date(year, month + 1, 0).getDate();
    
}

var calender = document.getElementById("calender");

let monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

window.getCalendarMonth = function(daysThisMonth, month){

    var currentRow = 2;

    let year = date.getFullYear();
    let startDate = new Date(year, month, 1);
    startDatePosition = startDate.getDay();

    document.getElementById("month").innerHTML = monthList[month];


    for(var i = 0; i < daysThisMonth; i++){

        var this_day = document.createElement("div");
        this_day.classList.add("calenderEntry");
        let dayPosition = startDate.getDay() + i;
        this_day.innerHTML = startDate.getDate() + i;
        this_day.id = dayPosition + "-" + (month + 1);

        if((startDatePosition + i) % (7 * (currentRow - 1)) == 0){
            this_day.style.gridColumn = 7;
        } else{
            this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));
        }
    
        this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));
    
        if(dayPosition == 6){
            currentRow + 1;
        }
    
        calender.appendChild(this_day);
    
    }

}

window.updateButton = function(){

    let date = new Date();
    let year = date.getFullYear();
    let month = document.getElementById("monthList").value;
    month = parseInt(month);

    let daysThisMonth = daysInMonth(month, year);

    // get month from dropdown
    console.log(month);
    console.log(daysThisMonth);

    let calenderEntriesToRemove = document.getElementsByClassName("calenderEntry");

    Array.from(calenderEntriesToRemove).forEach((entry) => {

		entry.parentNode.removeChild(entry);

	})

    
    getCalendarMonth(daysThisMonth, month);
    updateCalendar(month);
}


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
            
            console.log(this.response);

            userDate = this.response;

            populateCalendar(this.response, month);
        }


    }

    hr.send();

}

window.populateCalendar = function(data, month){


    data.forEach(function(entry){

        var date = new Date(entry.dateUploaded);

        if(date.getMonth() == month){

            console.log(entry);
            var mood = entry.mood;
            let month = date.getMonth();
            let day = date.getDate();
            let targetID = (day + "-" + (month + 1));
            console.log(targetID);
            let targetDiv = document.getElementById(targetID);
            targetDiv.innerHTML = day;
            targetDiv.classList.add("button" + mood);
            targetDiv.addEventListener("click", popup);

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


            function popup(){
                moodFeelings = document.getElementById("moodFeelings");
                var breakLine = document.createElement("br");
                moodFeelings.innerHTML = ("<b>Diary notes</b><br/>" + entry.text);
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

getCalendarMonth(daysThisMonth, month);
updateCalendar(month);