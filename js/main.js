// Simple Typewriter Text Effect

/*
let text = document.getElementById('typewriter');
//text = document.querySelector('#typewriter  h2');
const textArray = text.textContent.split('');

let timeLooper;

text.innerHTML = '';

function typewriterEffect() {
    if (textArray.length > 0) {
        text.innerHTML += textArray.shift();
    } else {
        clearTimeout(timeLooper);
    }
    //timeLooper = setTimeout(typewriterEffect, Math.floor(Math.random() * (200, 250)));
    timeLooper = setTimeout(typewriterEffect, Math.floor(Math.random() * (400 - 100) + 100));
}
typewriterEffect();
*/


(function () {
    let typewriter = {
        text: document.getElementById('typewriter'),
        init: () => {
            textArray = typewriter.text.textContent.split('');
            typewriter.text.innerHTML = '';
            typewriter.typewriterEffect();
        },
        typewriterEffect: () => {
            (textArray.length > 0) ? typewriter.text.innerHTML += textArray.shift() : clearTimeout(timeLooper);
            timeLooper = setTimeout(typewriter.typewriterEffect, Math.floor(Math.random() * (400 - 100) + 100));
        }
    };
    typewriter.init();
})()