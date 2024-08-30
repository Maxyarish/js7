const root=document.getElementById('root');

let isRunning=false
let countSecond=0
let idInterval=null

function startWatch(event){
const startBtn=event.target;
const startTime=new Date(0,0,0,0,0,0)
const h1 = event.target.parentElement.previousElementSibling;
if (isRunning===false) {
    isRunning=true
    startBtn.textContent='stop'   
   idInterval=setInterval(()=>{
    countSecond++;
    h1.textContent = new Date(new Date(0,0,0,0,0,0).setSeconds(countSecond)).toLocaleTimeString('en-GB');  
},0)
}else{
    clearInterval(idInterval)
    isRunning=false
    startBtn.textContent='start'
}

}
function clearWatch(event){
    const h1 = event.target.parentElement.previousElementSibling;
h1.textContent='00:00:00';
const startBtn=event.target.previousElementSibling;
startBtn.textContent='start'
isRunning=false;
clearInterval(idInterval)
countSecond=0
}


const renderStopWatch =()=>{
const section=document.createElement('section');
section.classList.add('controlWatch')
const h1=document.createElement('h1');
const div=document.createElement('div');
const startBtn=document.createElement('button');
startBtn.addEventListener('click',startWatch)
const clearBtn=document.createElement('button');
clearBtn.addEventListener('click',clearWatch)
startBtn.textContent='start';
clearBtn.textContent='clear';
div.append(startBtn,clearBtn);
section.append(h1,div);
h1.textContent='00:00:00';
return section;
};

root.append(renderStopWatch());
//const startTime=new Date(0,0,0,0,0,0);
//console.log(startTime.toLocaleTimeString('en-GB'));
//console.dir(startTime.setSeconds(1));
