var jumbotron = $(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var today = $("#currentDay");
var container = $(".container");


today.text(moment().format("LLL"));
var currentTime = moment().format("HH")
console.log(currentTime)

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
});



//present
//currentTime == timeArr[i]
/* textarea.attr("class","saved-events form control present")

//past
//currentTime-timeArr[i]>0
textarea.attr("class","saved-events form control past")

//future
textarea.attr("class","saved-events form control future") */

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

//$(".submit").onclick(function(){
    /*
   var currentHr= $(this).attr("data-val"); //9
  var userinput= $(this).parent().val(); 
  */
  //sfasdfas
