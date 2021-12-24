function display(classnamehaha){
    var activern = document.getElementsByClassName("active")[0];
    activern.classList.remove("active");
    activern.classList.add("inactive");
    classnamehaha = classnamehaha.split("#")[1]
    var clicked = document.getElementById(classnamehaha);
    clicked.classList.add("active");
    clicked.classList.remove("inactive");
}