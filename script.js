function computeForm() {
    event.preventDefault();
    //Declare empty variables =>undefined until input
    var day;
    var month;
    var year;

    var dd = document.getElementById("day");
    var mm = document.getElementById("month");
    var yy = document.getElementById("year");

    //How javascript will access your selected valus from options in the form
    day = dd.options[dd.selectedIndex].value;
    month = mm.options[mm.selectedIndex].value;
    year = yy.options[yy.selectedIndex].value;

    if (document.getElementById("male").checked) {
        gender = "male";
    } 
     if (document.getElementById("female").checked) {
        gender = "female";
    }if (gender === null){
          alert("Input gender");
          return false;
      }

    if (parseInt(day) <= 0 || parseInt(day) > 31) {
        alert("Invalid day");
    } else if (parseInt(month) <= 0 || parseInt(month) > 12) {
        alert("Month is invalid");
    } else {
        akanName(gender, day, month, year);
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
        var week = Math.trunc(weekDay(day, month, year));

        //Nested Array to store days of the week and assigned names for male gender
        var male = [{
                day: "Sunday",
                akan: "Kwasi",
            },
            {
                day: "Monday",
                akan: "Kwadwo",
            },
            {
                day: "Tuesday",
                akan: "Kwabena",
            },
            {
                day: "Wednesday",
                akan: "Kwaku",
            },
            {
                day: "Thursday",
                akan: "Yaw",
            },
            {
                day: "Friday",
                akan: "Kofi",
            },
            {
                day: "Saturday",
                akan: "Kwame",
            },
        ];

         //Nested Array to store days of the week and assigned names for male gender
        var female = [{
                day: "Sunday",
                akan: " Akosua",
            },
            {
                day: "Monday",
                akan: "Adwoa",
            },
            {
                day: "Tuesday",
                akan: "Abenaa",
            },
            {
                day: "Wednesday",
                akan: "Akua",
            },
            {
                day: "Thursday",
                akan: "Yaa",
            },
            {
                day: "Friday",
                akan: "Afua",
            },
            {
                day: "Saturday",
                akan: "Ama",
            },
        ];

        //Checks for keys and values from the array to assign akanname and day

        if (gender === male) {
            var result = male[week];
            document.getElementById("demo").innerHTML =
                "Your Akan name is  " + result.akan + " born on " + result.day;
        } else {
            var result = female[week];
            document.getElementById("demo").innerHTML =
                "Your Akan name is  " + result.akan + " born on " + result.day;
        }
    }

    function weekDay() {
        //substring extract characters from the string

        var CC = parseInt(year.substring(0, 2));
        var YY = parseInt(year.substring(2, 4));
        var MM = parseInt(month);
        var DD = parseInt(day);

        return (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    }
}