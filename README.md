This is the unit 5 homework for UPenn LPS Coding Bootcamp.
For this assignment, I am to create a functioning and dynamic daily planner. I assume I am to 
familiarize myself with jQuery and moment.js in order to succeed in this endeavor.

oxfordblucher.github.io/hw5-workday-scheduler
_____________________________________________________________________________________________________

![image](/assets/screenshot_working-timeblocks.png "Dynamic timeblocks")

![image](/assets/screenshot_working-localStorage.png "Working localstorage")

_____________________________________________________________________________________________________
I tried to simplify the problem in front of me as much as possible. I used a simple number array for the hours and parsed the numbers into 12-hour notation with a separate function/variable.
Using a $.each method, I dynamically create all the timeblocks and appended divs, rows, columns, etc. The rows change 'tense' classes based on how the current hour compares with their numeric IDs and change color accordingly. Users can type whatever they'd like into the textarea boxes and as long as they click the save button, the app will store their input along with the corresponding 'hour' value in localStorage. The timeblocks will display whatever is retained in localStorage upon refresh.

2 bits of functionality I added beyond the scope of this assignment's rubric is a button that clears the localStorage and I've made it so every button refreshes the page in order that the most up-to-date version of the schedule is displayed.