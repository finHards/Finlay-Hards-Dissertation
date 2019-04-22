


window.enterMood = function(){

    event.preventDefault();

    var hr = new XMLHttpRequest();

    var url = "/includes/diaryDAO.php";
    var text = document.getElementById("textZone").value;
    var mood = parseInt(document.querySelector('input[name="answer"]:checked').value);
    var moodInfo = "text="+text+"&mood="+mood+ "&phpfunction=submitDiary";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.send(moodInfo);

}