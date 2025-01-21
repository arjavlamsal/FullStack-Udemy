var no_of_drums = document.querySelectorAll('.drum').length;

function playSound(key){
    switch (key){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:
            console.log(key);  // To know what triggered this if anything goes wrong.
    }
}


for (var i = 0; i < no_of_drums; i++){  // Looping to add eventlistners to all buttons.
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var button_innerHTML = this.innerHTML;
        playSound(button_innerHTML);
    });
}


document.addEventListener('keydown', function(event){
    playSound(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.' + currentKey); 
    activeButton.classList.add('pressed');  // To add the animation to the button.
    setTimeout(function(){  // To remove the animation after 100ms. 
        activeButton.classList.remove('pressed');
    }, 100);
}

