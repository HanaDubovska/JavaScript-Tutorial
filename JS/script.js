
/* Index - Light bulb introduction - Barbora Briestenska*/

/* Switch button */

let switchbutton = document.getElementById("switch");

switchbutton.addEventListener("click", TurnOnLight);

function  TurnOnLight(){
    switchbutton.style.display = "none";
    document.getElementById("clickonme").style.display = "none";

    document.getElementById("light").style.display = "inline";
    document.getElementById("input").style.display = "inline";
    document.getElementById("text").style.display = "inline";
    document.getElementById("continueButton").style.display = "inline";
}

/* Continue button */

let continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", Continue);

function  Continue(){
    document.getElementById("input").style.display = "none";

    document.getElementById("text").innerHTML = "Hello " + document.getElementById("input").value +" !";
    document.getElementById("introductionText").style.display = "inline";
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("startButton").style.display = "inline";
}

/* Connection between Stage Index and Stage 1 - Hana Dubovska*/

function GoToStage1(){
    document.getElementById("index").style.display = "none";
    document.getElementById("stage1").style.display = "inline";
    document.body.style.backgroundColor = "white";
}

/* Stage 1 - Colorful dots   - Barbora Briestenska */

/* Dot 1  */

let dot1 = document.getElementById("dot1");

dot1.addEventListener("mouseover", mouseOver_dot1);
dot1.addEventListener("mouseout", mouseOut_dot1);

function mouseOver_dot1() {
    dot1.style.backgroundColor = "green";
}

function mouseOut_dot1 (){
    dot1.style.backgroundColor = "black";
}

/* Dot 2  */

let dot2 = document.getElementById("dot2");

dot2.addEventListener("mouseover", mouseOver_dot2);
dot2.addEventListener("mouseout", mouseOut_dot2);

function mouseOver_dot2() {
    dot2.style.backgroundColor = "yellow";
}

function mouseOut_dot2 (){
    dot2.style.backgroundColor = "black";
}

/* Dot 3  */

let dot3 = document.getElementById("dot3");

dot3.addEventListener("mouseover", mouseOver_dot3);
dot3.addEventListener("mouseout", mouseOut_dot3);

function mouseOver_dot3() {
    dot3.style.backgroundColor = "red";
}

function mouseOut_dot3(){
    dot3.style.backgroundColor = "black";
}

/* Dot 4  */

let dot4 = document.getElementById("dot4");

dot4.addEventListener("mouseover", mouseOver_dot4);
dot4.addEventListener("mouseout", mouseOut_dot4);

function mouseOver_dot4() {
    dot4.style.backgroundColor = "brown";
}

function mouseOut_dot4 (){
    dot4.style.backgroundColor = "black";
}

/* Dot 5  */

let dot5 = document.getElementById("dot5");

dot5.addEventListener("mouseover", mouseOver_dot5);
dot5.addEventListener("mouseout", mouseOut_dot5);

function mouseOver_dot5() {
    dot5.style.backgroundColor = "yellow";
}

function mouseOut_dot5 (){
    dot5.style.backgroundColor = "black";
}

/* Dot 6  */

let dot6 = document.getElementById("dot6");

dot6.addEventListener("mouseover", mouseOver_dot6);
dot6.addEventListener("mouseout", mouseOut_dot6);

function mouseOver_dot6() {
    dot6.style.backgroundColor = "purple";
}

function mouseOut_dot6(){
    dot6.style.backgroundColor = "black";
}

/* Dot 7  */

let dot7 = document.getElementById("dot7");

dot7.addEventListener("mouseover", mouseOver_dot7);
dot7.addEventListener("mouseout", mouseOut_dot7);

function mouseOver_dot7() {
    dot7.style.backgroundColor = "rebeccapurple";
}

function mouseOut_dot7 (){
    dot7.style.backgroundColor = "black";
}

/* Dot 8  */

let dot8 = document.getElementById("dot8");

dot8.addEventListener("mouseover", mouseOver_dot8);
dot8.addEventListener("mouseout", mouseOut_dot8);

function mouseOver_dot8() {
    dot8.style.backgroundColor = "rosybrown";
}

function mouseOut_dot8 (){
    dot8.style.backgroundColor = "black";
}

/* Dot 9  */

let dot9 = document.getElementById("dot9");

dot9.addEventListener("mouseover", mouseOver_dot9);
dot9.addEventListener("mouseout", mouseOut_dot9);

function mouseOver_dot9() {
    dot9.style.backgroundColor = "goldenrod";
}

function mouseOut_dot9(){
    dot9.style.backgroundColor = "black";
}

/* Dot 10  */

let dot10 = document.getElementById("dot10");

dot10.addEventListener("mouseover", mouseOver_dot10);
dot10.addEventListener("mouseout", mouseOut_dot10);

function mouseOver_dot10() {
    dot10.style.backgroundColor = "yellowgreen";
}

function mouseOut_dot10 (){
    dot10.style.backgroundColor = "black";
}

/* Dot 11  */

let dot11 = document.getElementById("dot11");

dot11.addEventListener("mouseover", mouseOver_dot11);
dot11.addEventListener("mouseout", mouseOut_dot11);

function mouseOver_dot11() {
    dot11.style.backgroundColor = "coral";
}

function mouseOut_dot11 (){
    dot11.style.backgroundColor = "black";
}

/* Dot 12  */

let dot12 = document.getElementById("dot12");

dot12.addEventListener("mouseover", mouseOver_dot12);
dot12.addEventListener("mouseout", mouseOut_dot12);

function mouseOver_dot12() {
    dot12.style.backgroundColor = "yellowgreen";
}

function mouseOut_dot12 (){
    dot12.style.backgroundColor = "black";
}

/* Dot 13  */

let dot13 = document.getElementById("dot13");

dot13.addEventListener("mouseover", mouseOver_dot13);
dot13.addEventListener("mouseout", mouseOut_dot13);

function mouseOver_dot13() {
    dot13.style.backgroundColor = "fuchsia";
}

function mouseOut_dot13(){
    dot13.style.backgroundColor = "black";
}

/* Dot 14  */

let dot14 = document.getElementById("dot14");

dot14.addEventListener("mouseover", mouseOver_dot14);
dot14.addEventListener("mouseout", mouseOut_dot14);

function mouseOver_dot14() {
    dot14.style.backgroundColor = "green";
}

function mouseOut_dot14 (){
    dot14.style.backgroundColor = "black";
}

/* Dot 15  */

let dot15 = document.getElementById("dot15");

dot15.addEventListener("mouseover", mouseOver_dot15);
dot15.addEventListener("mouseout", mouseOut_dot15);

function mouseOver_dot15() {
    dot15.style.backgroundColor = "peru";
}

function mouseOut_dot15 (){
    dot15.style.backgroundColor = "black";
}

/* Dot 16  */

let dot16 = document.getElementById("dot16");

dot16.addEventListener("mouseover", mouseOver_dot16);
dot16.addEventListener("mouseout", mouseOut_dot16);

function mouseOver_dot16() {
    dot16.style.backgroundColor = "khaki";
}

function mouseOut_dot16(){
    dot16.style.backgroundColor = "black";
}

/* Dot 17  */

let dot17 = document.getElementById("dot17");

dot17.addEventListener("mouseover", mouseOver_dot17);
dot17.addEventListener("mouseout", mouseOut_dot17);

function mouseOver_dot17() {
    dot17.style.backgroundColor = "khaki";
}

function mouseOut_dot17 (){
    dot17.style.backgroundColor = "black";
}

/* Dot 18  */

let dot18 = document.getElementById("dot18");

dot18.addEventListener("mouseover", mouseOver_dot18);
dot18.addEventListener("mouseout", mouseOut_dot18);

function mouseOver_dot18() {
    dot18.style.backgroundColor = "blue";
}

function mouseOut_dot18 (){
    dot18.style.backgroundColor = "black";
}

/* Connection between Stage 1 and Explanation - Stage 1  - Hana Dubovska*/

dot18.addEventListener("click", GoToStageE1);

function GoToStageE1(){
    document.getElementById("stage1").style.display = "none";
    document.getElementById("e-stage1").style.display = "inline";
   
}

/* Connection between Explanation - Stage 1 and Stage 1-2  - Hana Dubovska*/

function GoToStage12(){
    document.getElementById("e-stage1").style.display = "none";
    document.getElementById("stage1-2").style.display = "inline";
   
}

/* Stage 1-2 - Colorful dots version 2*/

// PETER BUDOLFSEN

// Create circle that needs to be clicked.
// Create circle in console
let circle1 = document.createElement("div");
// Show it on the HTML page
document.getElementById("stage1-2").append(circle1);

// Style circle
circle1.style.width = 100 + "px";
circle1.style.height = 100 + "px";
circle1.style.borderRadius = 50 + "%";
circle1.style.border = "solid";
circle1.style.position = "absolute";
circle1.style.left = 70 + "vw";
circle1.style.top = 60 + "vh";
circle1.style.cursor = "pointer";

// Create mouseover event, that changes the background color
circle1.addEventListener("mouseover", function () {
  circle1.style.backgroundColor = "red";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle1.addEventListener("mouseout", function () {
  circle1.style.backgroundColor = "transparent";
});

// Create mouseclick event on the red circle, that changes the background color permanently and shows the text "congratulations".
circle1.addEventListener("mouseup", function () {
    circle1.style.backgroundColor = "red";
  
    let congratulations = document.getElementById("congratulations");
    congratulations.innerHTML = "Congratulations";
    congratulations.style.textTransform = "uppercase";
    congratulations.style.position = "absolute";
    congratulations.style.left = "33%";
    congratulations.style.fontSize = "60px";
    congratulations.style.textAlign = "center";
    
    // Make sure the circle stays red, when you leave it after clicking.
    circle1.onmouseout = null;
  
  });

// NOTE!!! You can also add eventlistener in another and older way that will be supported in Internet Explorer 8 and earlier versions:
// https://www.w3schools.com/jsref/event_onmouseover.asp
// circle1.onmouseover = function () {
//   circle1.style.backgroundColor = "red";
// };

// Create a second circle
let circle2 = document.createElement("div");
// Show it on the HTML page
document.getElementById("stage1-2").append(circle2);
// Style circle
circle2.style.width = 200 + "px";
circle2.style.height = 200 + "px";
circle2.style.borderRadius = 50 + "%";
circle2.style.border = "solid";
circle2.style.position = "absolute";
circle2.style.left = 10 + "vw";
circle2.style.top = 50 + "vh";

// Create mouseover event, that changes the background color
circle2.addEventListener("mouseover", function () {
  circle2.style.backgroundColor = "blue";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle2.addEventListener("mouseout", function () {
  circle2.style.backgroundColor = "transparent";
});

// Create a third circle
let circle3 = document.createElement("div");
// Show circle on page
document.getElementById("stage1-2").append(circle3);
// Style circle
circle3.style.width = 20 + "px";
circle3.style.height = 20 + "px";
circle3.style.borderRadius = 50 + "%";
circle3.style.border = "solid";
circle3.style.position = "absolute";
circle3.style.left = 40 + "vw";
circle3.style.top = 40 + "vh";

// Create mouseover event, that changes the background color
circle3.addEventListener("mouseover", function () {
  circle3.style.backgroundColor = "purple";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle3.addEventListener("mouseout", function () {
  circle3.style.backgroundColor = "transparent";
});

// Create a fourth circle
let circle4 = document.createElement("div");
// Show circle on page
document.getElementById("stage1-2").append(circle4);
// Style circle
circle4.style.width = 50 + "px";
circle4.style.height = 50 + "px";
circle4.style.borderRadius = 50 + "%";
circle4.style.border = "solid";
circle4.style.position = "absolute";
circle4.style.left = 20 + "vw";
circle4.style.top = 20 + "vh";

// Create mouseover event, that changes the background color
circle4.addEventListener("mouseover", function () {
  circle4.style.backgroundColor = "orange";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle4.addEventListener("mouseout", function () {
  circle4.style.backgroundColor = "transparent";
});

// Create a fifth circle
let circle5 = document.createElement("div");
// Show circle on page
document.getElementById("stage1-2").append(circle5);
// Style circle
circle5.style.width = 70 + "px";
circle5.style.height = 70 + "px";
circle5.style.borderRadius = 50 + "%";
circle5.style.border = "solid";
circle5.style.position = "absolute";
circle5.style.left = 60 + "vw";
circle5.style.top = 30 + "vh";

// Create mouseover event, that changes the background color
circle5.addEventListener("mouseover", function () {
  circle5.style.backgroundColor = "yellow";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle5.addEventListener("mouseout", function () {
  circle5.style.backgroundColor = "transparent";
});

// Create a sixth circle
let circle6 = document.createElement("div");
// Show circle on page
document.getElementById("stage1-2").append(circle6);
// Style circle
circle6.style.width = 150 + "px";
circle6.style.height = 150 + "px";
circle6.style.borderRadius = 50 + "%";
circle6.style.border = "solid";
circle6.style.position = "absolute";
circle6.style.left = 80 + "vw";
circle6.style.top = 40 + "vh";

// Create mouseover event, that changes the background color
circle6.addEventListener("mouseover", function () {
  circle6.style.backgroundColor = "pink";
});
// Create mouseover event, that changes the background color to transparent, when mouse leaves.
circle6.addEventListener("mouseout", function () {
  circle6.style.backgroundColor = "transparent";
});



/* Connection between Stage 1-2 and Explanation - Stage 1-2 - Hana Dubovska*/

function GoToStage_e12(){
    document.getElementById("stage1-2").style.display = "none";
    document.getElementById("e-stage1-2").style.display = "inline";
   
}

/* Connection between Explanation - Stage 1-2 and Stage 2 - Hana Dubovska*/

function GoToStage2(){
    document.getElementById("e-stage1-2").style.display = "none";
    document.getElementById("stage2").style.display = "inline";
    TimeOut();
   
}

/*  Stage 2 - Change Images*/

// Marco Calderaro

// (CLICK)
// Takes the id´s from the html so you can make it interactive
let clickpurple = document.getElementById("clickpurple");
let clickorange = document.getElementById("clickorange");

// Creates function "changepurple" so you can change the purple picture
function changepurple() {
    clickpurple.style.display = "none";
    clickorange.style.display = "block";
}

// Creates the function "changeorange" so you can change the orange picture
function changeorange(){
    clickpurple.style.display = "block";
    clickorange.style.display = "none";
}

// When you "click" on the picture it tells the function to start  
clickpurple.addEventListener("click", changepurple);
clickorange.addEventListener("click", changeorange);

// (SET CLICKS)
// Takes the id´s from the html so you can make it interactive
let purpleclicks = document.getElementById("setpurple");
let orangeclicks = document.getElementById("setorange");

// Lets the clicks start at 0
let clicks = 0;

// Creates the function "amount" 
// ++ makes the value increase
// So if you click the picture 5 times it changes
function amount(){
    clicks++
    if (clicks==5) {    
        purpleclicks.style.display = "none";
        orangeclicks.style.display = "block";  

    }

}

// When you "click" on the picture it tells the function to start
purpleclicks.addEventListener("click", amount);

// (KEYDOWN)
// Takes the id´s from the html so you can make it interactive
let purplekey = document.getElementById("keypurple");
let orangekey = document.getElementById("keyorange");

// Creates the function "keyboard", that tells which letters to press
// key identifies the keyboard bottons and make it equal to the displayed letters.
// if you press "k" on the keyboard the orange picture will show 
// if you press "d" on the keyboard the purple picture will show 
function keyboard(e){
    if (e.key == "k") {
        purplekey.style.display = "none";
        orangekey.style.display = "block";
        
    }
    if (e.key == "d") {
        purplekey.style.display = "block";
        orangekey.style.display = "none";
        
    }
}

// By pressing down a key on the keyboard, 
// it tells the function to start. The function tells witch keys. 
document.addEventListener("keydown", keyboard);

// (BUTTON)
// Takes the id´s from the html so you can make it interactive
let purplebtn = document.getElementById("btnpurple");
let orangebtn = document.getElementById("btnorange");
let btn = document.getElementById("btn");

// Creates the function "shift", which takes the class "hidden" with the display: "none"
// and toggles between the pictures. 
function shift() {
    purplebtn.classList.toggle("hidden");
    orangebtn.classList.toggle("hidden");
}

// By clicking the button, the function starts
btn.addEventListener("click", shift);


function TimeOut(){
// (TIMEOUT)
// Takes the id´s from the html so you can make it interactive
    let purpletime = document.getElementById("timepurple");
    let orangetime = document.getElementById("timeorange");

// Sets the timeout and calls the function inside,
// to change the elements in 10 sec in miliseconds
    setTimeout(() => {
        orangetime.style.display = "block";
        purpletime.style.display = "none";
    }, 10000); 
}

// (INTERVAL)
// Takes the id´s from the html so you can make it interactive
let purpleint = document.getElementById("intpurple");
let orangeint = document.getElementById("intorange");

//Sets the style for the picture from the start
purpleint.style.display = "block"; 

// Sets the interval to shift the pictures every second in milisecond
// If the first picture is == "block", as we made it to be above, after 1 sec it will 
// be displayed as "none" and the second picture will be "block".
// When the second picture is == "block", it will switch back and continue this way every second 
setInterval(() => {
   
    if (purpleint.style.display == "block") {
      purpleint.style.display = "none";
      orangeint.style.display = "block";  
    }
    else if (orangeint.style.display == "block") {
    orangeint.style.display = "none";
    purpleint.style.display = "block";
    }  
}, 1000);

/* Connection Stage 2 and Explanation - Stage 2*/

function GoToEStage2(){
    document.getElementById("stage2").style.display = "none";
    document.getElementById("e-stage2").style.display = "inline";
   
}

/* Connection Explanation - Stage 2 and Stage 3 */

function GoToStage3(){
    document.getElementById("e-stage2").style.display = "none";
    document.getElementById("stage3").style.display = "inline";
    document.getElementById("stage3").classList.add("show");
    Arrows();
   
}

/* Stage 3 - Arrows - Peter Budolfsen*/

// Make two circles and move on of them using the arrow keys.

// Create circles
let movingCircle = document.createElement("div");
let staticCircle = document.createElement("div");
// Show the circles on page
document.getElementById("stage3").append(staticCircle);
document.getElementById("stage3").append(movingCircle);

// Style the moving circle
movingCircle.style.width = "100px";
movingCircle.style.height = "100px";
movingCircle.style.borderRadius = "50%";
movingCircle.style.backgroundColor = "green";
// Style the start position of the moving circle.
movingCircle.style.position = "relative";
movingCircle.style.left = 300 + "px";
movingCircle.style.top = 0 + "px";
// Style the  of the static circle
staticCircle.style.width = "100px";
staticCircle.style.height = "100px";
staticCircle.style.borderRadius = "50%";
staticCircle.style.backgroundColor = "blue";
// Style the position of the static circle.
staticCircle.style.position = "relative";
staticCircle.style.left = 900 + "px";
staticCircle.style.top = 300 + "px";

// Set a variable that indicates the number of pixels the circle will move, when told to.
let moveBy = 100;

// Create switch that sets up rules for the four arrow keys.
let stage3 = document.getElementById("stage3");


function Arrows() {
if (stage3.classList.contains("show")) {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        movingCircle.style.left =
          parseInt(movingCircle.style.left) - moveBy + "px";
        break;
      case "ArrowRight":
        movingCircle.style.left =
          parseInt(movingCircle.style.left) + moveBy + "px";
        break;
      case "ArrowUp":
        movingCircle.style.top =
          parseInt(movingCircle.style.top) - moveBy + "px";
        break;
      case "ArrowDown":
        movingCircle.style.top =
          parseInt(movingCircle.style.top) + moveBy + "px";
        break;
    }
  });
}

}
// Try changing the moveBy and see what happens...

// You can also try to add another circle that reacts on four different keys.


/* Connection Stage 3 to Explanation - Stage 3 - Hana Dubovska*/

function GoToEStage3(){
    document.getElementById("stage3").style.display = "none";
    document.getElementById("e-stage3").style.display = "inline";
   
}

/* Connection Explanation - Stage 3 to Stage 4 - Hana Dubovska*/

function GoToStage4(){
    document.getElementById("e-stage3").style.display = "none";
    document.getElementById("stage4").style.display = "inline";
   
}

/* Stage 4 - Random guess color - Hana Dubovska*/

function changeColors() {

    const button = document.getElementById("button");

    if(button.innerText === "START"){
        button.innerText = "NEW COLOURS";
    }else{
        button.innerText= "NEW COLOURS";
    }

    document.getElementById("paragraph").style.display = "inline";
    
    var r1 = Math.floor(Math.random() * 256);
    var g1 = Math.floor(Math.random() * 256);
    var b1 = Math.floor(Math.random() * 256);
    color1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
    

    var r2 = Math.floor(Math.random() * 256);
    var g2 = Math.floor(Math.random() * 256);
    var b2 = Math.floor(Math.random() * 256);
    color2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
    

    var r3 = Math.floor(Math.random() * 256);
    var g3 = Math.floor(Math.random() * 256);
    var b3 = Math.floor(Math.random() * 256);
    color3 = "rgb(" + r3 + ", " + g3 + ", " + b3 + ")";
    

    document.getElementById("square1").style.backgroundColor = color1;
    document.getElementById("square2").style.backgroundColor = color2;
    document.getElementById("square3").style.backgroundColor = color3;
    
    mix=[color1, color2, color3];
    
    mix.sort(() => Math.random() - 0.5);
    
    document.getElementById("h1").innerHTML = mix[0];
    
    const square1 = document.getElementById("square1");
    const square2 = document.getElementById("square2");
    const square3 = document.getElementById("square3");

    square1.addEventListener("click", function(){ 
        if (mix[0] == color1){
            document.getElementById("h1").style.backgroundColor = color1;
        }
    });

    square2.addEventListener("click", function(){ 
        if (mix[0] == color2){
            document.getElementById("h1").style.backgroundColor = color2;
        }
    });

    square3.addEventListener("click", function(){ 
        if (mix[0] == color3){
            document.getElementById("h1").style.backgroundColor = color3;
        }
    });

    document.getElementById("h1").style.backgroundColor = "white"
}

/* Connection Stage 4 to Explanation - Stage 4 - Hana Dubovska*/

function GoToEStage4(){
    document.getElementById("stage4").style.display = "none";
    document.getElementById("e-stage4").style.display = "inline";
   
}

/* Connection Explanation - Stage 4 to Stage 5 - Hana Dubovska*/

function GoToStage5(){
    document.getElementById("e-stage4").style.display = "none";
    document.getElementById("stage5").style.display = "inline";
    TextAnimation();
}

/* Stage 5 - Cool text animations - Peter Budolfsen*/

// https://www.youtube.com/watch?v=GUEB9FogoP8

// Create text that needs to be animated and append it to the HTML.
// type "paragraph"
// text: "My first JS animation"
function TextAnimation(){
    let animationText = document.createElement("p");
    animationText.innerHTML = "My first JS animation";
    document.getElementById("stage5").append(animationText);

    animationText.style.fontSize = "80px";
    animationText.style.textAlign = "center";
    animationText.style.lineHeight = "100vh";

    // Now we need to extract each letter from the p-element and put them into an array.
    let strText = animationText.textContent;
    let splitText = strText.split("");

    // ...and hide the original textelement.
    animationText.textContent = "";

    // Now we can loop through the array and wrap each letter in a <span>.
    // That way we can later add a new class to the letters in different ways.
    for (let index = 0; index < splitText.length; index++) {
    animationText.innerHTML += "<span>" + splitText[index] + "</span>";
    }
    // For later use we will also make an array with the letters in the reverse order.
    let reversed = Array.from(document.getElementsByTagName("span")).reverse();

    /* Now its time to set the variables and clear-functions that we need for each animation, 
    before we can actually make the animation function.*/


    let letter = 0;
    if (stage5.classList.contains("show")) {
    let timer1 = setInterval(addClass1, 100);
    let timer2 = null;
    let timer3 = null;

    function complete() {
        clearInterval(timer1);
        timer1 = null;
    }

    function complete2() {
        clearInterval(timer2);
        timer2 = null;
    }

    function complete3() {
        clearInterval(timer3);
        timer3 = null;
    }

    // 1st animation...Now create a function that adds a new class to each letter in a certain time interval.
    function addClass1() {
        let span = animationText.querySelectorAll("span")[letter];
        span.classList.add("fade");
        letter++;

        //   Stop the function when class has been added to all letters.
        if (letter === splitText.length) {
        letter = 0;
        complete();
        timer2 = setInterval(addClass2, 100); //start the next animation, when this one is completed.
        // Maybe try and change the number 100 and see what happens to the animation.
        return;
        }
    }
    // Now in CSS, we only have to style the SPAN (how it looks before fade is added) and the class "fade" (how it should look, when the class is added).
    // See CSS-file "textanimation.css" for inspiration.

    // add second animation that starts when the first one has ended.

    function addClass2() {
        let span = animationText.querySelectorAll("span")[letter];
        console.log(span);
        span.classList.add("colorChange");
        console.log(span);
        letter++;

        //   Stop the function when class has been added to all letters.
        if (letter === splitText.length) {
        letter = 0;
        complete2();
        timer3 = setInterval(addClass3, 100); //start the next animation, when this one is completed.
        // Maybe try and change the number 100 and see what happens to the animation.
        return;
        }
    }
    // Now in CSS, we only have to style class "colorChange" (how it should look, when the class is added).
    // See CSS-file "textanimation.css" for inspiration.

    // add a third animation that starts when the second one has ended.
    // In this one we use the reversed array, that we created in the beginning.
    function addClass3() {
        let span = reversed[letter];
        console.log(span);
        span.classList.add("scale");
        console.log(span);
        letter++;

        //   Stop the function when class has been added to all letters.
        if (letter === splitText.length) {
        letter = 0;
        complete3();
        return;
        }
    }
    }
    // Now in CSS, we only have to style class "scale" (how it should look, when the class is added).
    // See CSS-file "textanimation.css" for inspiration.
}

/* Connection Stage 5 to Explanation - Stage 5 - Hana Dubovska*/

function GoToEStage5(){
    document.getElementById("stage5").style.display = "none";
    document.getElementById("e-stage5").style.display = "inline";
   
}

/* Connection Explanation - Stage 5 to Stage 6 - Hana Dubovska*/

function GoToStage6(){
    document.getElementById("e-stage5").style.display = "none";
    document.getElementById("stage6").style.display = "inline";

}

/* Stage 6 - Stop Watch */

// Marco Calderaro
// Creates the variable that defines miliseconds, seconds & minutes
let miliseconds = 0;
let seconds = 0;
let minutes = 0;

// Create variable that shows the extra 0 in the text
let textseconds = 0;
let textminues = 0;

// Creates the variable that defines if it has started or stopped
let situation  = "stopped";

// Creates the function of the stopwatch
function watch() {
    miliseconds++;
    if (miliseconds / 100 === 1) { // When we start the stopwatch the miliseconds will increment up till 100,
        miliseconds = 0;          //  and start over and then increment seconds.  
        seconds++;

    if (seconds / 60 ===1){       // Same goes for seconds, but because there is 60 seconds to a minut, we will
        seconds = 0;              // let it go up to 60 and then increment minuts and starts seconds at 0  
        minutes++;
    }    
        
    }

    // If seconds/minuts are 0-9 it adds a 0 to the value. The toString adds the "0" as a text to the seconds & minutes
    if (seconds < 10){
        textseconds = "0" + seconds.toString();
    }
    else{
        textseconds = seconds;
    }
    if (minutes < 10){
        textminues = "0" + minutes.toString();
    }
    else{
        textminues = minutes;
    } 

    // Displayes the values for minutes, seconds & miliseconds to the html
    document.getElementById("time").innerHTML = textminues + ":" + textseconds + ":" + miliseconds;
}
// Takes the id´s from the html so you can change the element
let ssbtn = document.getElementById("startStopbtn")

// Function to start and stop the stopwatch
function gono(){
    if (situation === "stopped"){
        // Starts the watch 
        ssbtn = window.setInterval(watch, 10); // will call the 'watch' function and update the time every 10 miliseconds
        document.getElementById("startStopbtn").innerHTML = "stop";
        situation = "started";

    }   
    else{
        // Stops the watch
        window.clearInterval(ssbtn);
        document.getElementById("startStopbtn").innerHTML = "start";
        situation = "stopped";
    }

}
// When you "click" on "start button" it tells the function "gono" to start, same goes for stop
ssbtn.addEventListener("click", gono);

// Takes the id´s from the html so you can change the element
let resetbtn = document.getElementById("Resetbtn");

function back() {
    window.clearInterval(); // Clears the ongoing interval and reset the values back to 0
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("time").innerHTML = "00:00:00"; // Resets the display
    document.getElementById("startStopbtn").innerHTML = "start"; // Resets the button back to 'start'

}

// When you "click" on "Reset" button it tells the function "back" to start
resetbtn.addEventListener("click", back);



/* Connection Stage 6 to Explanation - Stage 6 - Hana Dubovska*/

function GoToEStage6(){
    document.getElementById("stage6").style.display = "none";
    document.getElementById("e-stage6").style.display = "inline";
   
}

/* Connection Explanation - Stage 6 to Final - Hana Dubovska*/

function GoToFinal(){
    document.getElementById("e-stage6").style.display = "none";
    document.getElementById("final").style.display = "inline";
    document.body.style.backgroundColor = "#F4CA3E";

}