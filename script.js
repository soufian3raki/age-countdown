function getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var dob = new Date(dateString.substring(6, 10),
        dateString.substring(0, 2) - 1,
        dateString.substring(3, 5)
    );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";


    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + dayString + " old!";
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";

    return ageString;
}

var year = new Date().getFullYear();

var date = "Jan 23 " + year.toString() + " 00:00:01";
var countDownDate = new Date(date).getTime();
var date2 = "Jan 23 1993 21:22:00"
var now = new Date().getTime();
var distance = countDownDate - now;
if (distance < 0) {
    year = year + 1;
    var date = "Jan 23 " + year.toString() + " 00:00:01";
    var countDownDate = new Date(date).getTime();
}
var countDownDate2 = new Date(date2).getTime();
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var distance2 = now - countDownDate2;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysstring = "";
    var hourstring = "";
    var minutestring = "";
    var secstring = "";

    if (days < 10) {
        daysstring = "00" + days.toString();
    }
    else if (days < 100) {
        daysstring = "0" + days.toString();
    }
    else {
        daysstring = days.toString();
    }

    if (hours < 10) {
        hourstring = "0" + hours.toString();
    }

    else {
        hourstring = hours.toString();
    }

    if (minutes < 10) {
        minutestring = "0" + minutes.toString();
    }

    else {
        minutestring = minutes.toString();
    }

    if (seconds < 10) {
        secstring = "0" + seconds.toString();
    }

    else {
        secstring = seconds.toString();
    }


    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = daysstring;
    document.getElementById("hour").innerHTML = hourstring;
    document.getElementById("min").innerHTML = minutestring;
    document.getElementById("sec").innerHTML = secstring;

    document.getElementById("demo2").innerHTML = "You are  " + getAge('01/23/1993')
    // If the count down is over, write some text 

    if (distance < 0) {
        year = year + 1
    }

}, 1000);