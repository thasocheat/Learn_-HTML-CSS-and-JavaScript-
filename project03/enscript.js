var enVar = setInterval(enTimer, 1000);

var enmonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var endays = [
    // "Sunday",
    // "Monday",
    // "Tuesday",
    // "Wednesday",
    // "Thursday",
    // "Friday",
    // "Saturday"
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

var entime = ["12",
    "01","02","03","04","05","06","07","08","09","10","11","12",
    "01","02","03","04","05","06","07","08","09","10","11"
];
    
    function enTimer(){
        var date = new Date();

        document.getElementById("endate").innerHTML = endays[date.getDay()] + "-" 
        + date.getDate() + "-" 
        + enmonths[date.getMonth()] + "-" 
        + date.getFullYear();

        document.getElementById("enhours").innerHTML = entime[date.getHours()];
        document.getElementById("enminutes").innerHTML = date.getMinutes();
        document.getElementById("enseconds").innerHTML = date.getSeconds();
        document.getElementById("enampm").innerHTML = date.getHours()<12?"AM":"PM";
    }