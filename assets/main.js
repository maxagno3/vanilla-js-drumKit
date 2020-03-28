window.addEventListener('keydown', function (e) {

    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`); //selecting audio tags containing data-key;
    let key = document.querySelector(`.key[data-key='${e.keyCode}']`);   //selecting the tags containing the class of key having data-key;
    if (!audio) return; //stopping the run of function all together;
    audio.currentTime = 0; // resets the audio time after it has been played;
    audio.play();   // plays the audio file.
    key.classList.add('playing'); // adding the class of playing to the tags containing the class of key;
    
})

let keys = document.querySelectorAll('.key'); //selecting everything which comes under the tag containing the class of key.
keys.forEach(el => el.addEventListener('transitionend', removeTransition)); //looping over the array of keys adding event listener to each and every element in it.

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if it's not transform;
    this.classList.remove('playing'); //removing the classlist of playing;
}