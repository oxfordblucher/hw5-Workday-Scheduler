var jumbotron = $(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var today = $("#currentDay");
var container = $(".container");

$("#clear").on("click", function() {
    localStorage.clear();
    location.reload();
    return false;
})

today.text(moment().format("LLL"));
var currentTime = moment().format("HH");

var timeArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

jQuery.each(timeArr, function(i, val) {
    var d1 = $("<div class = 'row'>");
    var d2 = $("<div class = 'col-1 hour'>");
    var d3 = $("<div class = 'col-9'>");
    var d4 = $("<div class = 'col-2'>");
    var nuTxt = $("<textarea class = 'saved-events'>");
    var btn = $("<button class = 'saveBtn'>");

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
    btn.text("Save Task(s)");

    container.append(d1);
    d1.append(d2);
    d2.after(d3);
    d3.after(d4);
    d3.append(nuTxt);
    d4.append(btn);

    if(localStorage.getItem(timeArr[i]) !== null) {
        nuTxt.text(localStorage.getItem(timeArr[i]));
    }

    if(timeArr[i] > currentTime) {
        d1.addClass("future");
    }else if(timeArr[i] == currentTime) {
        d1.addClass("present");
    }else if(timeArr[i] < currentTime) {
        d1.addClass("past");
    }
});

$(".saveBtn").on("click", function() {
    var currentHr = $(this).attr("data-value");
    var userInput = $(this).parent().siblings().children('.saved-events').val();
    localStorage.setItem(currentHr, userInput);
    location.reload();
    return false;
});

