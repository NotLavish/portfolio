function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

function display(classnamehaha){
    var activern = document.getElementsByClassName("active")[0];
    activern.classList.add("inactive");
    activern.classList.remove("active");
    classnamehaha = classnamehaha.split("#")[1]
    var clicked = document.getElementById(classnamehaha);
    clicked.classList.remove("inactive");
    clicked.classList.add("active");
    
}


function poggies_selector() {
    var poggies = ["poggies/1.png", "poggies/2.png", "poggies/3.png"];
    var poggies = pickRandom(poggies);
    document.getElementById("poggies").setAttribute("src", poggies);
}

poggies_selector()