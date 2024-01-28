function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio){
        return; //stop fucntion from running
    }
    audio.currentTime = 0; //allow you to spam same sound by reset the time of the track to 0
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);