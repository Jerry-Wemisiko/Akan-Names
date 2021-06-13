//Form validation
function validateForm(){
    var day = document.myForm.day.value;
    var month =document.myForm.month.value;
    var year =document.myForm.year.value;

    if (day<0 || day>31){
        alert("Day is invalid");
        return false;
    }else if(month<0 ||month>12){
        alert("Month is invalid");
        return false;
    }

    if(year<1900){
        alert("Extremely old");
        return false;
    }
}

