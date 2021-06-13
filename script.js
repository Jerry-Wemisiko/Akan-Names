function computeForm(){
    var day ="";
    var month = "";
    var year = "";

    var dd = document.getElementById("day");
    var mm = document.getElementById("month");
    var yy = document.getElementById("year");

    day = dd.options[dd.selectedIndex].value;
    month = mm.options[mm.selectedIndex].value;
    year = yy.options[yy.selectedIndex].value;

    if (day<=0 || day>31){
        alert("Day is invalid")
    }else if(month<=0 || month>12){
        alert("Month is invalid")
    }else 
    akanName();
    }

function akanName(gender,day,month,year){
week = new MakeArray(7);
days[0] = "Sunday"
days[1] = "Monday"
days[2] = "Tuesday"
days[3] = "Wednesday"
days[4] = "Thursday"
days[5] = "Friday"
days[6] = "Saturday"




}