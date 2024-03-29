

//function is defined in javascript by DOM using window. function as its all bundled together it would try run every function at once otherwise
window.enterMood = function(){
    
    event.preventDefault();

    //setting an ajax post request to be sent to diaryDAO.php, with the input text and mood selected attached.
    var hr = new XMLHttpRequest();

    var url = "/includes/diaryDAO.php";
    var text = document.getElementById("textZone").value;
    var mood = parseInt(document.querySelector('input[name="answer"]:checked').value);
    var moodInfo = "text="+text+"&mood="+mood+ "&phpfunction=submitDiary";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    //when the ready state of the request is changed output the response into a div.
    hr.onreadystatechange = function(){

        var returnData = hr.responseText;

        if(returnData == "Currently you can only submit one diary submission a day"){
            document.getElementById("errorbox").innerHTML = returnData;
        } else {
            document.getElementById("errorbox").innterHTML = "Your diary submission was successful! Visit the tracker to see your diary progress";
        }
    }

    //execute the post request
    hr.send(moodInfo);




}