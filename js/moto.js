window.onload = function (){


    var p2 = document.getElementById("inf1");
    p2.addEventListener("mouseover",overP2);
    p2.addEventListener("mouseleave",leaveP2)
    function overP2() {
        document.getElementById("infInner2P").style.transition="all,0.3s";
        document.getElementById("infInner2P").style.color="#0088b8";
    }
    function leaveP2() {
        document.getElementById("infInner2P").style.color="white";
    }
    var p6 = document.getElementById("inf2");
    p6.addEventListener("mouseover",overP6);
    p6.addEventListener("mouseleave",leaveP6);
    function overP6(){
        document.getElementById("infInner6P").style.transition="all,0.3s";
        document.getElementById("infInner6P").style.color="#2f302a";
    }
    function leaveP6() {
        document.getElementById("infInner6P").style.color="white";
    }
    var sealInner = document.getElementById("sealInner");
    var innerImgRoll = document.getElementById("innerImgRoll");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    var point = 1;
    var timer;

    function buttonChanges() {
        for (var i = 0;i<buttons.length;i++){
            if (buttons[i].className == "selected"){
                buttons[i].className = "";
                break;
            }
        }
        buttons[point-1].className = "selected";
    }

    function computeLeftLength(offset) {
        var leftValue = innerImgRoll.offsetLeft;
        var newLeftValue = leftValue + offset;

        innerImgRoll.style.left = newLeftValue + "px";

        if (newLeftValue > -786){
            innerImgRoll.style.left = -3144 + "px";
        }
        else  if (newLeftValue < -3144){
            innerImgRoll.style.left = -786 + "px";
        }
    }

    
    left.onclick = toPrev;
    function toPrev() {
        if(point == 1){
            point = 4;
        }
        else {
            point -= 1;
        }

        buttonChanges();

        computeLeftLength(786);


    }

    right.onclick = toNext;
    function toNext() {

        if(point == 4){
            point = 1;
        }
        else {
            point += 1;
        }

        buttonChanges();

        computeLeftLength(-786);
        // innerImgRoll.style.transition = "all 0.3s";
    }

    for (var i=0;i<buttons.length;i++){
        buttons[i].onclick = function (){
            if (this.className == "selected"){//优化语句
                return;                       //优化语句
            }                                 //优化语句
            var newPoint = parseInt(this.getAttribute("point"));
            var leftChangeValue = (newPoint - point) * -786;
            computeLeftLength(leftChangeValue);
            point = newPoint;

            buttonChanges();
        }
    }


    sealInner.onmouseout = start;
    function start() {

        innerImgRoll.style.transition = "all 1s";

        timer = setInterval(function () {
            right.onclick();
        },3000);


    }

    sealInner.onmouseover = stop;
    function stop() {
        innerImgRoll.style.transition = "all 0.3s";
        clearInterval(timer);
    }

    start();


}