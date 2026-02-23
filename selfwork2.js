// Crea un file html con le seguenti caratteristiche:

// un input per il titolo

// una textarea per inserire un paragrafo

// un bottone per creare l’articolo

// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input


// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN
// let date = new Date();
// let formatDate = date.toLocaleDateString()


// EXTRA:
// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti


// seleziono gli elementi

let titleInput = document.querySelector('#titleInput');
let paragraphInput = document.querySelector('#paragraphInput');
let createButton = document.querySelector('#createButton');
let container = document.querySelector('#container');


// evento click

createButton.addEventListener('click', ()=>{

    let title = titleInput.value;
    let paragraph = paragraphInput.value;

    if(title == '' || paragraph == ''){
        alert('Compila i campi richiesti');
        return;
    }

    // creo l'articolo

    let article = document.createElement('article');

    let h2 = document.createElement('h2');
    h2.innerText = title;

    let p = document.createElement('p'); 
    p.innerText = paragraph;


    // inserisco la data

    let date = new Date();

    let small = document.createElement('small');
    small.innerText = date.toLocaleDateString();


    // inserisco dentro article

    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(small);


    // inserisco nel container

    container.appendChild(article);


    // pulisco gli input

    titleInput.value = '';
    paragraphInput.value = '';

});

