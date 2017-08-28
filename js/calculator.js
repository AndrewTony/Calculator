var btns = document.getElementsByClassName("calcButton");
var leftDisplay = document.getElementById("calcDisplay1");
var signBtns = document.getElementsByClassName("calcSignButton");
var centerDisplay = document.getElementById("calcDisplay2");
var rightDisplay = document.getElementById("calcDisplay3");
var equalsSign = document.getElementById("equals");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

        if (centerDisplay.getAttribute("value") !== "" && leftDisplay.getAttribute("value") !== "") {
            var value = rightDisplay.getAttribute("value");
            value = value + this.getAttribute("value");
            rightDisplay.setAttribute("value", value);
        } else {
            var value = leftDisplay.getAttribute("value");
            value = value + this.getAttribute("value");

            leftDisplay.setAttribute("value", value);
        }
    })
}

for (var i = 0; i < signBtns.length; i++) {
    signBtns[i].addEventListener("click", function () {
        centerDisplay.setAttribute("value", this.getAttribute("value"));
    })
}
equalsSign.addEventListener("click", function () {
    var centerValue = centerDisplay.getAttribute("value");
    var leftValue = parseInt(leftDisplay.getAttribute("value"));
    var rightValue = parseInt(rightDisplay.getAttribute("value"));
    var total;

    switch (centerValue) {
        case "+":
            total = leftValue + rightValue;
            break;
        case "-":
            total = leftValue - rightValue;
            break;
        case "/":
            total = leftValue / rightValue;
            break;
        case "x":
            total = leftValue * rightValue;
            break;
    }
    leftDisplay.setAttribute("value", total);
    centerDisplay.setAttribute("value", "");
    rightDisplay.setAttribute("value", "");

})
