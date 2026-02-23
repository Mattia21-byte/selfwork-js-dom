// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni. 

// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso. 

// il secondo dovra’ rendere il testo dei paragrafi in grassetto. 

// il terzo dovra’ far scomparire e ricomparire i paragrafi.

// TIPS:
// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. 

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

let par1 = document.querySelector('#primo');
let par2 = document.querySelector('#secondo');
let par3 = document.querySelector('#terzo');

//paragrafi cambiano colore, da 0 a 256
function changeColour(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//evento bottone 1

btn1.addEventListener('click', ()=>{

    par1.style.color = changeColour();
    par2.style.color = changeColour();
    par3.style.color = changeColour();

});


//evento bottone 2

btn2.addEventListener('click', ()=>{
    par1.style.fontWeight = 'bold';
    par2.style.fontWeight = 'bold';
    par3.style.fontWeight = 'bold';
});


//evento bottone 3

let visible = true;

btn3.addEventListener('click', ()=>{

    if(visible){
        par1.style.display = 'none';
        par2.style.display = 'none';
        par3.style.display = 'none';

        visible = false;

    }else{

        par1.style.display = 'block';
        par2.style.display = 'block';
        par3.style.display = 'block';

        visible = true;

    }
});
