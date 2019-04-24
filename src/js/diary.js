


window.enterMood = function(){

    event.preventDefault();

    var hr = new XMLHttpRequest();

    var url = "/includes/diaryDAO.php";
    var text = document.getElementById("textZone").value;
    var mood = parseInt(document.querySelector('input[name="answer"]:checked').value);
    var moodInfo = "text="+text+"&mood="+mood+ "&phpfunction=submitDiary";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function(){

        var returnData = hr.responseText;

        if(returnData == "Currently you can only submit one diary submission a day"){
            document.getElementById("errorbox").innerHTML = returnData;
        } else {
            document.getElementById("errorbox").innterHTML = returnData;
        }
    }


    hr.send(moodInfo);




}