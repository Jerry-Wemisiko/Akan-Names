function computeForm() {

    event.preventDefault();
    var day = "";
    var month = "";
    var year = "";

    var dd = document.getElementById("day");
    var mm = document.getElementById("month");
    var yy = document.getElementById("year");

    day = dd.options[dd.selectedIndex].value;
    month = mm.options[mm.selectedIndex].value;
    year = yy.options[yy.selectedIndex].value;

    if (document.getElementById("male").checked) {
        gender = "male";
      } else if (document.getElementById("female").checked) {
        gender = "female";
      } else {
        gender = "NONE";
      }

      if (gender === "NONE"){
        alert("Invalid gender");
      } else if (parseInt(day) <= 0 || parseInt(day) > 31) {
        alert("Invalid day");
      } else if (parseInt(month) <= 0 || parseInt(month) > 12) {
        alert("Month is invalid");
      } else {
        akanName(day, month, year, gender);
      }


function akanName(gender, day, month, year) {
    //Initialize day of the week array
    // week = new MakeArray(7);
    // week[0] = "Sunday"
    // week[1] = "Monday"
    // week[2] = "Tuesday"
    // week[3] = "Wednesday"
    // week[4] = "Thursday"
    // week[5] = "Friday"
    // week[6] = "Saturday"
    var week = getWeekDay(day,month,year);

    //Nested Array 
    var male = [
        {
        day: "Sunday",
        akan: "Kwasi"
    }, {
        day: "Monday",
        akan: "Kwadwo"
    }, {
        day: "Tuesday",
        akan: "Kwabena"
    }, {
        day: "Wednesday",
        akan: "Kwaku"
    }, {
        day: "Thursday",
        akan: "Yaw"
    }, {
        day: "Friday",
        akan: "Kofi"
    }, {
        day: "Saturday",
        akan: "Kwame"
    }];


    var female = [
        {
        day: "Sunday",
        akan: " Akosua"
    }, {
        day: "Monday",
        akan: "Adwoa"
    }, {
        day: "Tuesday",
        akan: "Abenaa"
    }, {
        day: "Wednesday",
        akan: "Akua"
    }, {
        day: "Thursday",
        akan: "Yaa"
    }, {
        day: "Friday",
        akan: "Afua"
    }, {
        day: "Saturday",
        akan: "Ama"
    }];

    if(gender ===male)
    {
        var result =male[week -1];
        alert("Your Akan name is " + result.akan +"born on "+result.day);
    }else
    {
        var result =female[week -1];
        alert("Your Akan name is " + result.akan +"born on "+result.day);
    
    }

}
function getWeekDay(){
    var YY =parseInt(year.substring(2,4));
    var MM = parseInt(month);
    var DD =parseInt(day);

    return  ( DD + (((MM + 1) *26)/10) + YY + (YY/4) + 5 * (YY/100) + (YY/400) - 1) % 7;
}
}