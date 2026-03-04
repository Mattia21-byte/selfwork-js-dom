// Crea una pagina html con le seguenti caratteristiche:
// crea un input dove potrai inserire un tot di secondi.
// un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
// un pulsante che, al click, mettera' in pausa il countdown.
// un pulsante che, al click, pulira' l’input e azzerera' il countdown.

// EXTRA:
// se il timer viene stoppato (non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punto



// CATTURO GLI ELEMENTI HTML
let seconds = document.querySelector('#seconds');
let startBtn = document.querySelector('#startBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let resetBtn = document.querySelector('#resetBtn');
let countdown = document.querySelector('.countdown');



//creo 2 variabili per il timer

let interval;
let time = 0;

//faccio partire il countdown quando l'utente clicca start
startBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    if(time === 0){
        time = Number(seconds.value)

    }
    countdown.innerHTML = time;

    interval = setInterval(()=>{
        if(time > 0){
        time --;
        countdown.innerHTML = time;
        }else{
            clearInterval(interval);
            time = 0;
        }
    }, 1000);
})

//pausa
pauseBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    
});

//reset
resetBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    time = 0;
    countdown.innerHTML = 0;
    seconds.value = '';
});