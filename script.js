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

var button = $("button");

button.on("click", function() {
    var disBtn = $(this).attr("data-value");
    var disWrk = $(disBtn).val();
    localStorage.setItem(disBtn, disWrk);
})


var workHours = ["#8am", "#9am", "#10am", "#11am", "#12noon", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm", "6pm"];

var timeArr=[8,9,10,11,12,13,14,15,16,17];

$("#currentDay").text(moment().format("LLL"));
var currentTime=moment().format("HH")
console.log(currentTime)

//1. create what you want via html snip

//<div class="row border rounded" style="height: 150px;" data-value="9" id="9">
    //<div class="col-1">9 am</div>
    //<div class="col-9">
        //<textarea rows="5" id='9am' data-value='9'class='saved-events form-control'></textarea>
    //</div>
    //<div class="col-2">
        //<button class="button button-primary" data-value="#9am">Save</button>
    //</div>
//</div>

//2. start creating the var
/*
var d1= $("<div>");
d1.attr("class","row border rounded")
.attr("style","height:150px;")
.attr("data-value", timeArr[0])
.attr("id", timeArr[0]);

var d2= $("<div>");
d2.attr("class","col-1")
.text(timeArr[0]);

var d3= $("<div>");
d3.attr("class","col-9")
var textarea =$("<textarea>")
textarea.attr("row","5")
.attr("id", timeArr[0])
.attr("data-value", timeArr)
.attr("class","saved-events form control");
var d4= $("<div>");
d4.attr("class","col-2");
var btn =$("<button>");
btn.attr("class", "button button-primary")
.attr("data-value",timeArr[0])
var d5= $("<div>");

//3. style add all the attr id, class///
//4. append it to each 
//5. append to html
*/

