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

const bkey2 = document.querySelector('.a');
const bkey3 = document.querySelector('.s');
const bkey5 = document.querySelector('.d');
const bkey6 = document.querySelector('.f');
const bkey7 = document.querySelector('.g');
const bkey9 = document.querySelector('.h');
const bkey0 = document.querySelector('.j');

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
const save = document.querySelector('.saveLink');

const helpBtn = document.querySelector('.helpBtn');
const bKeys = document.querySelectorAll(".b");
const Keys = document.querySelectorAll(".key");
const overlay = document.querySelector('.overlay');

var AudioContext = window.AudioContext || window.webkitAudioContext || false;

let audioCtx;

if(AudioContext){
    audioCtx = new AudioContext();
}else{
    window.alert("Sorry, the Web Audio Api is not supported by your browser. Please, consider upgrading or using a different browser to use this site.");
}

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
let k = audioCtx.createMediaElementSource(audio[11]);
let l = audioCtx.createMediaElementSource(audio[12]);
let m = audioCtx.createMediaElementSource(audio[13]);
let n = audioCtx.createMediaElementSource(audio[14]);
let o = audioCtx.createMediaElementSource(audio[15]);
let p = audioCtx.createMediaElementSource(audio[16]);
let q = audioCtx.createMediaElementSource(audio[17]);

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
k.connect(audioCtx.destination);
l.connect(audioCtx.destination);
m.connect(audioCtx.destination);
n.connect(audioCtx.destination);
o.connect(audioCtx.destination);
p.connect(audioCtx.destination);
q.connect(audioCtx.destination);

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
k.connect(s);
l.connect(s);
m.connect(s);
n.connect(s);
o.connect(s);
p.connect(s);
q.connect(s);

let mediaRecorder = new MediaRecorder(s.stream);


audio.volume = 0;
//pressing the keys 
window.addEventListener('keydown', function(e){
    audioCtx.resume();
    const a = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const k = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!a) return;
    a.load();
    a.play();
    if(!k){
        const b = document.querySelector(`.b[data-key="${e.keyCode}"]`); 
        b.classList.add('playing2');
    }
    else{
        k.classList.add('playing');
    }

});

//when you release the keys
window.addEventListener('keyup', function(e){
    const k = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!k) {
        const b = document.querySelector(`.b[data-key="${e.keyCode}"]`); 
        b.classList.remove('playing2');
    }
    else{
        k.classList.remove('playing');
    }
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
 bkey2.addEventListener('click', function (){
    bkey2.classList.add('playing2');
    audio[11].load();
    audio[11].play();
     
    setTimeout(function(){
        bkey2.classList.remove('playing2');
    }, 500);
 });
 bkey3.addEventListener('click', function (){
    bkey3.classList.add('playing2');
    audio[12].load();
    audio[12].play();
     
    setTimeout(function(){
        bkey3.classList.remove('playing2');
    }, 500);
 });
 bkey5.addEventListener('click', function (){
    bkey5.classList.add('playing2');
    audio[13].load();
    audio[13].play();
     
    setTimeout(function(){
        bkey5.classList.remove('playing2');
    }, 500);
 });
 bkey6.addEventListener('click', function (){
    bkey6.classList.add('playing');
    audio[14].load();
    audio[14].play();
     
    setTimeout(function(){
        bkey6.classList.remove('playing');
    }, 500);
 });
 bkey7.addEventListener('click', function (){
    bkey7.classList.add('playing');
    audio[15].load();
    audio[15].play();
     
    setTimeout(function(){
        bkey7.classList.remove('playing');
    }, 500);
 });
 bkey9.addEventListener('click', function (){
    bkey9.classList.add('playing');
    audio[16].load();
    audio[16].play();
     
    setTimeout(function(){
        bkey9.classList.remove('playing');
    }, 500);
 });
 bkey0.addEventListener('click', function (){
    bkey0.classList.add('playing');
    audio[17].load();
    audio[17].play();
     
    setTimeout(function(){
        bkey0.classList.remove('playing');
    }, 500);
 });

//volume controller
volMute.classList.remove('mute');
volLouder.classList.add('mute');
volZero.classList.remove('mute');
volMid.classList.add('mute');
volMax.classList.add('mute');

audio.forEach((element) => element.volume = 0);


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
        audioCtx.resume();
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

let mute = true;
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
    
    if(!playing && audio[10].duration > 0){
        play.classList.add('rotate');
        unplay.classList.add('unrotate');
        window.console.log("PLAYING");
        audio[10].load();
        audio[10].play();
        
        audio[10].addEventListener('ended', function(){
            audio[10].currentTime = 0;
            play.classList.remove('rotate');
            unplay.classList.remove('unrotate');
            playing = false;
        });
        
        playing = true;
    }else if (playing && audio[10].duration > 0){
        play.classList.remove('rotate');
        unplay.classList.remove('unrotate');
        window.console.log("STOPPING");
        audio[10].pause();
        audio[10].currentTime = 0;
        
        playing = false;
    }else{
        play.classList.add('shake2');
        setTimeout(function (){
            play.classList.remove('shake2');
        }, 1000);
    }

});


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
        
        let blob = new Blob(chunks, { 'type' : 'audio/ogg'});
        let recorded = URL.createObjectURL(blob);
        audio[10].src = recorded;
        save.href = audio[10].src;
        save.download = 'recording.ogg';
        
        window.console.log("Successfully recorded " + blob.size + " bytes of " + blob.type + " media.");
    };
}

save.addEventListener('click', function(){
    if(save.href.length === 0){
        save.style.color= 'red';
        setTimeout(function (){
            save.style.color= 'white';
        }, 200);
    }
});

let show = false;
helpBtn.addEventListener('click', function(){
    
    if(!show){
        Keys.forEach((element) => element.style.color = "black");
        bKeys.forEach((element) => element.style.color = "white");
        helpBtn.style.background = "white";
        helpBtn.style.color = "black";
        helpBtn.innerHTML = "-";
        overlay.style.display = "inherit";
        show = true;
    }
    else if(show){
        Keys.forEach((element) => element.style.color = "white");
        bKeys.forEach((element) => element.style.color = "black");
        helpBtn.style.background = "black";
        helpBtn.style.color = "white";
        helpBtn.innerHTML = "+";
        overlay.style.display = "none";
        show = false;
        
    }
});




