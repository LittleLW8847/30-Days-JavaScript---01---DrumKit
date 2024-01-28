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

function removeTransition(e){
    if(e.type !== 'transitionend'){
        return ; // if the event type isn't transitionend then skip it
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
