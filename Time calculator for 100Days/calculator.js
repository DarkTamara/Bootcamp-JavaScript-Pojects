
function calcTime(){
    // this needs to be inside here, else it's null
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;

    document.getElementById("result").style.display = "inline-block";
    // makes div appear

    document.getElementById("logTime").innerHTML = (Math.round((+hours + ( +minutes / 60)) * 100) / 100).toFixed(2);
    // display the result 
}
