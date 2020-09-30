var jumbotron = $(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var today = $("#currentDay");
var container = $(".container");

today.text(moment().format("LLL"));
var currentTime = moment().format("HH");
console.log(localStorage);
console.log(localStorage.getItem("9"));

var timeArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

jQuery.each(timeArr, function(i, val) {
    var d1 = $("<div class = 'row border rounded' style = 'height: 150px'>");
    var d2 = $("<div class = 'col-1'>");
    var d3 = $("<div class = 'col-9'>");
    var d4 = $("<div class = 'col-2'>");
    var nuTxt = $("<textarea rows = '5' class = 'saved-events form-control'>");
    var btn = $("<button class = 'button button-primary'>");

    var civvyTime = function isPM(a, b) {
        if(timeArr[i] < 12) {
            return timeArr[i] + " am";
        }else if(timeArr[i] === 12) {
            return timeArr[i] + " pm";
        }else if(timeArr[i] > 12) {
            return timeArr[i] - 12 + " pm";
        }}

    d1.attr("data-value", timeArr[i]);
    d1.attr("id", timeArr[i]);

    d2.text(civvyTime);

    nuTxt.attr("id", timeArr[i]);
    nuTxt.attr("data-value", timeArr[i]);

    btn.attr("data-value", timeArr[i]);
    btn.text("Save")

    container.append(d1);
    d1.append(d2);
    d2.after(d3);
    d3.after(d4);
    d3.append(nuTxt);
    d4.append(btn);

    if(localStorage.getItem(timeArr[i]) !== null) {
        nuTxt.attr("placeholder", localStorage.getItem(timeArr[i]));
    }
});

$(".button").on("click", function() {
    var currentHr = $(this).attr("data-value");
    var userInput = $(this).parent().siblings().children('.saved-events').val();
    localStorage.setItem(currentHr, userInput);
});