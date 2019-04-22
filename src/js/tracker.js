
function daysInMonth(month, year){
    return 32 - new Date(month, year, 32).getDate();
}

var calender = document.getElementById("calender");

let monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

document.getElementById("month").innerHTML = monthList[month];
let startDate = new Date(year, month, 1);
startDatePosition = startDate.getDay();

var currentRow = 2;

daysThisMonth = daysInMonth(year, month);

for(var i = 0; i < daysThisMonth; i++){

    var this_day = document.createElement("div");
    let dayPosition = startDate.getDay() + i;
    this_day.innerHTML = startDate.getDate() + i;
    this_day.id = ("0" + dayPosition.slice(-2)) + "-" + month;

    this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));

    if(dayPosition == 6){
        currentRow + 1;
    }

    calender.appendChild(this_day);

}

window.updateCalendar = function(){

    event.preventDefault();

    var hr = new XMLHttpRequest();
    var url = "/includes/trackerDAO.php";
    var getData = "phpfunction=getCalendarData";

    hr.open("GET", url, true);
    hr.setRequestHeader("content-type", "application/json");
    hr.responseType="json";
    
    hr.onreadystatechange = function(){


        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }

    }

    hr.send();

}