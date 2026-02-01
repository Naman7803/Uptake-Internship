let countdown;
const timerDisplay=document.querySelector('.display_time-left');
const endTime=document.querySelector('.display_end-time');
const buttons=document.querySelectorAll('[data-time]')

function timer(seconds){
    clearInterval(countdown)
    const now=Date.now();
    const then=now+seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then)
    // console.log({now,then})
    countdown=setInterval(() =>{
        const secondsLeft=Math.round((then-Date.now())/1000);
        if(secondsLeft<=0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    },1000)
}   

function displayTimeLeft(seconds){  
    const miutes=Math.floor(seconds/60);
    const reminderSecond=seconds%60;
    const display=`${miutes}:${reminderSecond <10?'0':''}${reminderSecond}`;
    timerDisplay.textContent=display;
    document.title=display
    // console.log({miutes,reminderSecond})
}

function displayEndTime(timestamp){
    const end=new Date(timestamp)
    const hour=end.getHours();
    const adjustedHour=hour>12?hour-12:hour;
    const minutes=end.getMinutes();
    endTime.textContent=`Be Back At ${adjustedHour}:${minutes<10?'0':''}${minutes}`
}

function startTimer(){
    const seconds=parseInt(this.dataset.time);
    // console.log(seconds)
    timer(seconds)
}   

buttons.forEach(button =>button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit',function(e){
    e.preventDefault()
    const mins=this.minutes.value;
    // console.log(mins)
    timer(mins*60)
    this.reset()
})