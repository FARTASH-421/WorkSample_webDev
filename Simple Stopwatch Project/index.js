const display = document.getElementById("display");

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;


function start(){

    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    document.getElementById("stop").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("rest").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("start").style.backgroundColor = "rgba(241, 16, 83, 0.47)";
}

function stop(){
  
    clearInterval(int);
    document.getElementById("stop").style.backgroundColor = "rgba(241, 16, 83, 0.47)";
    document.getElementById("start").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("rest").style.backgroundColor = "rgb(255, 0, 0)";
}

function rest(){

    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    display.textContent = "00 : 00 : 00"
    document.getElementById('ms').textContent = `.00`
    document.getElementById("stop").style.backgroundColor = "rgba(241, 16, 83, 0.47)";
    document.getElementById("start").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("rest").style.backgroundColor = "rgba(241, 16, 83, 0.47)";
    
}

function displayTimer(){
    milliseconds +=1;
    if(milliseconds == 100){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds ;

 display.textContent = `${h} : ${m} : ${s}`;
 document.getElementById('ms').textContent = `.${ms}`

}