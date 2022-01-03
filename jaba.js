function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

function display(classnamehaha){
    let activern = document.getElementsByClassName("active")[0];
    activern.classList.add("inactive");
    activern.classList.remove("active");
    classnamehaha = classnamehaha.split("#")[1]
    let clicked = document.getElementById(classnamehaha);
    clicked.classList.remove("inactive");
    clicked.classList.add("active");
    
}


function poggies_selector() {

    let numberOfPoggies = 4;
    var poggies = []
    for (let i = 1; i <= numberOfPoggies; i++) {
        poggies.push("poggies/"+ i +".png");
    }
    var poggies = pickRandom(poggies);
    document.getElementById("poggies").setAttribute("src", poggies);
}

function copy(){
    navigator.clipboard.writeText("lavish#1529");
}


poggies_selector()