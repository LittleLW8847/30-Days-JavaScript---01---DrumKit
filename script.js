function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(!audio){
        return; //stop fucntion from running
    }
    audio.currentTime = 0; //allow you to spam same sound by reset the time of the track to 0
    audio.play();
}

window.addEventListener('keydown', playSound);