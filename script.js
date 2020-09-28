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

var workHours = ["#8am", "#9am", "#10am", "#11am", "#12noon", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm", "#6pm"];

