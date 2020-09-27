var jumbotron = $(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var today = $("#currentDay");
var container = $(".container");

var tSpan = $("<span>");
tSpan.text("Today's date: ");
tSpan.attr("class", "badge badge-info");

today.prepend(tSpan);
today.append(moment().format("LL"));

/* hourFunction () {
    var workHours = [];
    for (let)
}
*/
/*
moment.updateLocale('en', {
    meridiemParse: RegExp,
    isPM: Function
}); */

var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

for (let i = 0; i < workHours.length; i++) {
    var newDiv = $("<div>");
    var workHr = workHours[i];
    if (workHr <= 12) {
        workHr = workHours[i];
    }else{
        workHr = workHr - 12 + " pm";
    }
    newDiv.text(workHr);
    container.append(newDiv);
    newDiv.attr("class", "card");
    newDiv.attr("style", "")
    }