var targetdate = new Date("Dec 31, 2024 00:00:00").getTime();

var x=setInterval(function(){
    var presentdate = new Date().getTime();
    var timeleft=targetdate-presentdate;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    if(timeleft<0){
        document.getElementById("days").innerHTML="00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    }
},1000)