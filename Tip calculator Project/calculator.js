
function calcTip(){
    // this needs to be inside here, else it's null
    var people = document.getElementById("people").value;
    var tipPercent = document.getElementById("tipPercent").value;
    var bill = document.getElementById("bill").value;

    var totalTip = ((tipPercent/100) * bill ) / people;
    totalTip = (Math.round(totalTip * 100) / 100).toFixed(2)

    document.getElementById("total").style.display = "inline-block";
    // makes div appear

    if ( people == 1 ){
        document.getElementById("nrPeople").innerHTML = people + " person";
    } else {
        document.getElementById("nrPeople").innerHTML = people + " people";
    }

    document.getElementById("tip").innerHTML = tipPercent;
    document.getElementById("totalBill").innerHTML =  totalTip + "/person";
}
