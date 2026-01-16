// const video=document.querySelector('video');
// const play=document.getElementById('play');
// const frwd=document.getElementById('skip-25');
// const bkwrd=document.getElementById('skip-10');
// const volume=document.getElementById('volume');
// const playbackRate=document.getElementById('playbackRate')
// const progress=document.querySelector('.progress')
// const progress__filled=document.querySelectorAll('.progress__filled')

// play.addEventListener('click',function(){
//     if(video.paused){
//         video.play()
//     }else{
//         video.pause()
//     }
// });

// let playing=false;

// function toggle(){
//     if(playing){
//         video.pause()
//     }else{
//         video.play()
//     }
//     playing=!playing;
// }


// frwd.addEventListener('click',() =>{
//     video.currentTime+=25;
// })

// bkwrd.addEventListener('click',() =>{
//     video.currentTime-=10;
// })


// volume.addEventListener('input',function() {
//     video.volume=volume.value;
//     if(video.volume){
//         volume.value++;
//     }
//     else{
//         volume.value--;
//     }
// })


// playbackRate.addEventListener('input',function() {
//     video.playbackRate=playbackRate.value;
//     if(video.playbackRate){
//         playbackRate.value++;
//     }
//     else{
//         playbackRate.value--;
//     }

// })

// // progress.addEventListener("click", (e) => {
// //     let timelineWidth = playbackline.clientWidth;
// //     video.currentTime = (e.offsetX / timelineWidth) * video.duration;
// // });


// // video.addEventListener("timeupdate", () => {
// //     const currentTime = video.currentTime;
// //     const duration = video.duration;
// //     const percentage = (currentTime / duration) * 100;
// //     progress__filled.style.width = percentage + "%";
// // });







const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const pregressbar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipbuttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const full=player.querySelector('#full');


function togglePlay() {
    const method=video.paused ? 'play' : 'pause';
    video[method]();
    // if (video.paused) {
    //     video.play()
    // } else {
    //     video.pause()
    // }
}

function updateButton(){
    const icon=this.paused ? '►' :'||';
    toggle.textContent= icon;
}

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRange(){
    video[this.name]=this.value;
}

function handleProgress(){
    const percent=(video.currentTime / video.duration) *100;
    pregressbar.style.flexBasis=`${percent}%`;
}

function scrub(e){
    const scrubTime=(e.offsetX / progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;   
}

function openFullScreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
    else{
        document.exitFullscreen()
    }
}




video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
video.addEventListener('timeupdate',handleProgress);

skipbuttons.forEach(button =>button.addEventListener('click',skip));
ranges.forEach(range =>range.addEventListener('change',handleRange));
ranges.forEach(range =>range.addEventListener('mousemove',handleRange));

let mousedown=false;
progress.addEventListener('click',scrub)
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown=true);
progress.addEventListener('mouseup',() => mousedown=false);

full.addEventListener('click',openFullScreen);
