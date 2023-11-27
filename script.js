// Dato un array di oggetti letterali con:
// URL dell’immagine
// Titolo della slide
// Descrizione della slide
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e
//  inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2: Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e 
// viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// step .1 creo un array dove metto gli objects, ossia img + h1 + p
const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imgEl = document.getElementById('current-img');
const textEL = document.getElementById('carousel-info');

let currentIndex = 0;
showSlide(currentIndex);

function showSlide(index) {
     const slide = images[index];
     imgEl.src = slide.image; // Fix property name
     textEL.innerHTML = `
        <h1>${slide.title}</h1>
        <p>${slide.description}</p>
     `;
    imgEl.style.maxWidth = '100%';
    imgEl.style.maxHeight = '100%';
    imgEl.style.width = 'auto';
    imgEl.style.height = 'auto';
}

document.getElementById('prev-img').addEventListener('click', prevSlide);
document.getElementById('next-img').addEventListener('click', nextSlide);

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    showSlide(currentIndex);
}