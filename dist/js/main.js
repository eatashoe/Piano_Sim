/* jshint esversion: 6*/
/* jshint browser: true */

//the keys
const key1 = document.querySelector('.q');//81
const key2 = document.querySelector('.w');//87
const key3 = document.querySelector('.e');//69
const key4 = document.querySelector('.r');//82
const key5 = document.querySelector('.t');//84
const key6 = document.querySelector('.y');//89
const key7 = document.querySelector('.u');//85
const key8 = document.querySelector('.i');//73
const key9 = document.querySelector('.o');//79
const key10 = document.querySelector('.p');//80

const audio = document.querySelectorAll('audio');

const volCtrl = document.querySelector('.volCtrl');

const volUp = document.querySelector('.fa-angle-up');
const volDown = document.querySelector('.fa-angle-down');
const volZero = document.querySelector('.fa-volume-off');
const volMute = document.querySelector('.fa-ban');
const volLouder = document.querySelector('.fa-volume-down');
const volMax = document.querySelector('.fa-volume-up');
const volMid = document.querySelector('.volume-medium');
const volume = document.querySelector('.fa-layers');

const media = document.querySelector('.record');
const player = document.querySelector('.fa-stack');
const play = document.querySelector('.fa-play-circle');
const unplay = document.querySelector('.fa-pause-circle');
const record = document.querySelector('.fa-dot-circle');


let audioCtx = new AudioContext();
let s = audioCtx.createMediaStreamDestination();
let a = audioCtx.createMediaElementSource(audio[0]);
let b = audioCtx.createMediaElementSource(audio[1]);
let c = audioCtx.createMediaElementSource(audio[2]);
let d = audioCtx.createMediaElementSource(audio[3]);
let e = audioCtx.createMediaElementSource(audio[4]);
let f = audioCtx.createMediaElementSource(audio[5]);
let g = audioCtx.createMediaElementSource(audio[6]);
let h = audioCtx.createMediaElementSource(audio[7]);
let i = audioCtx.createMediaElementSource(audio[8]);
let j = audioCtx.createMediaElementSource(audio[9]);

a.connect(audioCtx.destination);
b.connect(audioCtx.destination);
c.connect(audioCtx.destination);
d.connect(audioCtx.destination);
e.connect(audioCtx.destination);
f.connect(audioCtx.destination);
g.connect(audioCtx.destination);
h.connect(audioCtx.destination);
i.connect(audioCtx.destination);
j.connect(audioCtx.destination);

a.connect(s);
b.connect(s);
c.connect(s);
d.connect(s);
e.connect(s);
f.connect(s);
g.connect(s);
h.connect(s);
i.connect(s);
j.connect(s);

let mediaRecorder = new MediaRecorder(s.stream);



audio.volume = 1;
//pressing the keys 
window.addEventListener('keydown', function(e){
    
    const a = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const k = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!a) return;
    a.load();
    a.play();
    k.classList.add('playing');
});

//when you release the keys
window.addEventListener('keyup', function(e){
    const k = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!k) return;
    k.classList.remove('playing');
});

//play piano using mouse
 key1.addEventListener('click', function (){
    key1.classList.add('playing');
    audio[0].load();
    audio[0].play();
     
    setTimeout(function(){
        key1.classList.remove('playing');
    }, 500);
 });
 key2.addEventListener('click', function (){
    key2.classList.add('playing');
    audio[1].load();
    audio[1].play();
     
    setTimeout(function(){
        key2.classList.remove('playing');
    }, 500);
 });
 key3.addEventListener('click', function (){
    key3.classList.add('playing');
    audio[2].load();
    audio[2].play();
     
    setTimeout(function(){
        key3.classList.remove('playing');
    }, 500);
 });
 key4.addEventListener('click', function (){
    key4.classList.add('playing');
    audio[3].load();
    audio[3].play();
     
    setTimeout(function(){
        key4.classList.remove('playing');
    }, 500);
 });
 key5.addEventListener('click', function (){
    key5.classList.add('playing');
    audio[4].load();
    audio[4].play();
     
    setTimeout(function(){
        key5.classList.remove('playing');
    }, 500);
 });
 key6.addEventListener('click', function (){
    key6.classList.add('playing');
    audio[5].load();
    audio[5].play();
     
    setTimeout(function(){
        key6.classList.remove('playing');
    }, 500);
 });
 key7.addEventListener('click', function (){
    key7.classList.add('playing');
    audio[6].load();
    audio[6].play();
     
    setTimeout(function(){
        key7.classList.remove('playing');
    }, 500);
 });
 key8.addEventListener('click', function (){
    key8.classList.add('playing');
    audio[7].load();
    audio[7].play();
     
    setTimeout(function(){
        key8.classList.remove('playing');
    }, 500);
 });
 key9.addEventListener('click', function (){
    key9.classList.add('playing');
    audio[8].load();
    audio[8].play();
     
    setTimeout(function(){
        key9.classList.remove('playing');
    }, 500);
 });
 key10.addEventListener('click', function (){
    key10.classList.add('playing');
    audio[9].load();
    audio[9].play();
     
    setTimeout(function(){
        key10.classList.remove('playing');
    }, 500);
 });

//volume controller
volMute.classList.add('mute');
volLouder.classList.add('mute');
volZero.classList.add('mute');
volMid.classList.add('mute');

volDown.addEventListener('click', function (){
    if(audio.volume > 0){
        audio.forEach((element) => element.volume -= 0.25);
        audio.volume -= 0.25;
    }
    else{
        volCtrl.classList.add('shake');
        setTimeout(function (){
            volCtrl.classList.remove('shake');
        }, 1000);
    }
    if(audio.volume === 0.75){
        volMax.classList.add('mute');
        volMid.classList.remove('mute');
    }
    else if(audio.volume === 0.5){
        volMid.classList.add('mute');
        volLouder.classList.remove('mute');
    }
    else if(audio.volume === 0.25){
        volMute.classList.add('mute');
        volLouder.classList.add('mute');
        volZero.classList.remove('mute');
    }
    else if(audio.volume === 0){
        volMute.classList.remove('mute');
        volZero.classList.remove('mute');
    }
});
volUp.addEventListener('click', function (){
    if(audio.volume < 1){
        audio.forEach((element) => element.volume += 0.25);
        audio.volume += 0.25;
    }
    else{
        volCtrl.classList.add('shake');
        setTimeout(function (){
            volCtrl.classList.remove('shake');
        }, 1000);
    }
    if(audio.volume === 0.25){
        volMute.classList.add('mute');
        volZero.classList.remove('mute');
    }
    else if(audio.volume === 0.5){
        volZero.classList.add('mute');
        volLouder.classList.remove('mute');
    }
    else if(audio.volume === 0.75){
        volLouder.classList.add('mute');
        volMid.classList.remove('mute');
    }
    else if(audio.volume === 1){
        volMax.classList.remove('mute');
        volLouder.classList.add('mute');
    }
    
});

let mute = false;
window.addEventListener('keydown', function(e){
    if(e.keyCode === 77 && !mute){
        volMute.classList.remove('mute');
        volLouder.classList.add('mute');
        volZero.classList.remove('mute');
        volMid.classList.add('mute');
        volMax.classList.add('mute');
        audio.volume = 0;
        audio.forEach((element) => element.volume = 0);
        mute = true;
    }
    else if(e.keyCode === 77 && mute){
        volMute.classList.add('mute');
        volLouder.classList.add('mute');
        volZero.classList.add('mute');
        volMid.classList.add('mute');
        volMax.classList.remove('mute');
        audio.volume = 1;
        audio.forEach((element) => element.volume = 1);
        mute = false;
    }
});

volume.addEventListener('click', function(e){
    if(!mute){
        volMute.classList.remove('mute');
        volLouder.classList.add('mute');
        volZero.classList.remove('mute');
        volMid.classList.add('mute');
        volMax.classList.add('mute');
        audio.volume = 0;
        audio.forEach((element) => element.volume = 0);
        mute = true;
    }
    else if(mute){
        volMute.classList.add('mute');
        volLouder.classList.add('mute');
        volZero.classList.add('mute');
        volMid.classList.add('mute');
        volMax.classList.remove('mute');
        audio.volume = 1;
        audio.forEach((element) => element.volume = 1);
        mute = false;
    }
    
});



//recorder
let clicked = false;
record.addEventListener('click', function (){
    if(!clicked){
        record.style.color = "red";
        record.style.transform = "scale(1.05)";
        record.style.background = "radial-gradient(red 10px, transparent 30%, transparent 50%)";
        record.classList.add('ticker');
        clicked = true;
        
        startRecord();
        
    }else{
        record.style.color = "black";
        record.style.transform = "scale(1.0)";
        record.style.background = "radial-gradient(transparent 10px, transparent 30%, transparent 50%)";
        record.classList.remove('ticker');
        clicked = false;
        
        mediaRecorder.stop();
        window.console.log("ending recording...");
    }
});

//player
let playing = false;
player.addEventListener('click', function (){
    if(!playing){
        play.classList.add('rotate');
        unplay.classList.add('unrotate');
        audio[10].play();
        
        if(audio[10].duration > 0){
            setTimeout(function() {
                play.classList.remove('rotate');
                unplay.classList.remove('unrotate');
                playing = false;
            }, audio[10].duration*1000);
        }
        playing = true;
    }else{
        play.classList.remove('rotate');
        unplay.classList.remove('unrotate');
        audio[10].pause();
        
        playing = false;
    }

});



/*
mediaRecorder.ondataavailable = handleDataAvailable;

function handleDataAvailable(event){
    if(event.data.size > 0){
        window.console.log('data available');
        chunks.push(event.data);
        window.console.log(chunks);
    }
}

mediaRecorder.onstop = function(event) {
    
    let blob = new Blob(chunks, { 'type' : 'audio/webm'});
    let recorded = URL.createObjectURL(blob);
    
    
    window.console.log("Successfully recorded " + blob.size + " bytes of " + blob.type + " media.");
};
*/


function startRecord() {
    mediaRecorder.start();
    window.console.log("recording started");
    let chunks = [];

    mediaRecorder.ondataavailable = function(event){
        if(event.data.size > 0){
            window.console.log('data available');
            chunks.push(event.data);
            window.console.log(chunks);
        }
    };
    
    mediaRecorder.onstop = function(event) {
    
        let blob = new Blob(chunks, { 'type' : 'audio/webm'});
        let recorded = URL.createObjectURL(blob);
        audio[10].src = recorded;
        
        window.console.log("Successfully recorded " + blob.size + " bytes of " + blob.type + " media.");
    };
}




