var btns = document.getElementsByClassName("calcButton");
var leftDisplay = document.getElementById("calcDisplay1");
var signBtns = document.getElementsByClassName("calcSignButton");
var centerDisplay = document.getElementById("calcDisplay2");
var rightDisplay = document.getElementById("calcDisplay3");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){

        if(centerDisplay.getAttribute("value") !== "" && leftDisplay.getAttribute("value") !== ""){
            var value = rightDisplay.getAttribute("value");
            value += this.getAttribute("value");
            rightDisplay.setAttribute("value", value);
        }else{
            var value = leftDisplay.getAttribute("value");
            value = value + this.getAttribute("value");

            leftDisplay.setAttribute("value", value);
        }
    })
}

for(var i = 0; i < signBtns.length; i++){
    signBtns[i].addEventListener("click", function(){
        centerDisplay.setAttribute("value", this.getAttribute("value"));
    })
}


