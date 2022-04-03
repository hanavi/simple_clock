function timeNow() {

    time = new Date();

    // Update clock settings here

    // Clock 1
    clockOffset1 = -4;
    clockOffsetLabel1 = "LCL";

    // Clock 2
    clockOffset2 = 0;
    clockOffsetLabel2 = "UTC";

    // Clock 3
    clockOffset3 = -5;
    clockOffsetLabel3 = "CDT";

    clock1 = offsetTime(time, clockOffset1, clockOffsetLabel1);
    clock2 = offsetTime(time, clockOffset2, clockOffsetLabel2);
    clock3 = offsetTime(time, clockOffset3, clockOffsetLabel3);

    document.getElementById('clock1').innerHTML = clock1;
    document.getElementById('clock2').innerHTML = clock2;
    document.getElementById('clock3').innerHTML = clock3;
}
function offsetTime(time, offsetHours, tzLabel) {

    // Update the time due to offsets
    tzOffset = time.getTimezoneOffset() * 60 * 1000;
    offset = offsetHours * 60 * 60 * 1000 + tzOffset;
    newTime = new Date(time.getTime() + offset);

    // Get the display values
    year = newTime.getYear();
    month = newTime.getMonth();
    date = newTime.getDate();

    hours = newTime.getHours();
    minutes = newTime.getMinutes();
    seconds = newTime.getSeconds();

    // Fix numbers needing leading zeros
    year += 1900;
    if ( month < 10 ) { month = "0" + month; }
    if ( date < 10 ) { date = "0" + date; }
    if ( hours < 10 ) { hours = "0" + hours; }
    if ( minutes < 10 ) { minutes = "0" + minutes; }
    if ( seconds < 10 ) { seconds = "0" + seconds; }

    // Build out the display string
    timeString = tzLabel;
    timeString += ' ' + year + '.' + month + '.' + date;
    timeString += ' ' + hours + ':' + minutes + ':' + seconds;

    return timeString;
}
window.onload = function() { setInterval( timeNow, 100); }
