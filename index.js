var button_array=document.querySelectorAll(".drum");

for (var index = 0; index < button_array.length; index++) {
    button_array[index].addEventListener("click",handleClick);
}

function handleClick() {
    var buttonInnerHTML=this.textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keypress",key_pressed);

function key_pressed(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
    var currentButton=document.querySelector("."+currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function () {
        currentButton.classList.remove("pressed");
    },100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Invalid Press");
            break;
    }
}