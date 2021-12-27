function display(classnamehaha){
    var activern = document.getElementsByClassName("active")[0];
    activern.classList.add("inactive");
    activern.classList.remove("active");
    classnamehaha = classnamehaha.split("#")[1]
    var clicked = document.getElementById(classnamehaha);
    clicked.classList.remove("inactive");
    clicked.classList.add("active");
    
}