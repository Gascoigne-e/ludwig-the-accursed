
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        console.log("Button clicked: " + buttonInnerHtml); // Debugging log
        makesound(buttonInnerHtml);
        buttonanimation(buttonInnerHtml);
    });
}

// Adding event listener for keydown events
document.addEventListener('keydown', function (event) {
    console.log("Key pressed: " + event.key); // Debugging log
    makesound(event.key); 
    buttonanimation(event.key);
});

function makesound(key) {
    console.log("makesound function called with key: " + key); // Debugging log
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("Unrecognized key: " + key); // Debugging log
            break;
    }
} 


function buttonanimation(currentkey){
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");

    }, 100);
}