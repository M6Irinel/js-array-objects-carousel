// console.log('slider')
const slides = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
]


// ===============================================================
// MY SCRIPT


// salviamo tutti gli elementi dentro alle variabili costanti
const DOM = document.querySelector.bind(document);

const DOM_UL_FATHER = DOM('.slides-wrapper');
const DOM_BUTTON_PREV = DOM('.arrow-prev');
const DOM_BUTTON_NEXT = DOM('.arrow-next');

// creiamo delle array per salvataggio degli elementi da creare
const DOM_LI_ELEMENTS_CREATED = [];

// assegnamo la quantità di elementi da creare
const NUM_IMG_FOR_INSERT = 5;

// creaiamo una variabile di tipo number per usarlo come indice che cambiera sempre
let index_img = 0;

// un for per la creazione del layout
for (let i = 0; i < slides.length; i++) {

    // creaiamo un elemento di tipo <li></li>
    const _li_create = document.createElement('li');
    // creaiamo un elemento di tipo <img>
    const _img_create = document.createElement('img');
    // creaiamo un elemento di tipo <button></button>
    const _slide__content = document.createElement('div');
    const _slide__title = document.createElement('h3');
    const _slide__description = document.createElement('p');


    // assegnamo classi di partenza agli elementi
    _li_create.className = 'slide';
    _slide__content.className = 'slide__content';
    _slide__title.className = 'slide__title';
    _slide__description.className = 'slide__description';

    // assegnamo ai primi elementi creati le classi per l'attivazione
    if (i === 0) {
        _li_create.classList.add('active');
    }

    // assegnamo alla <img> creata al src il link da prender l'immagine
    _img_create.src = slides[i].url;
    _slide__title.innerHTML = slides[i].title;
    _slide__description.innerHTML = slides[i].description;

    // pushamo dentro a una array per tenerla salvata
    DOM_LI_ELEMENTS_CREATED.push(_li_create);

    // appendiamo agli elementi nel DOM
    _li_create.append(_img_create);
    _slide__content.append(_slide__title);
    _slide__content.append(_slide__description);
    _li_create.append(_slide__content);
    DOM_UL_FATHER.append(_li_create);
}

// al click del pulsante precedente
DOM_BUTTON_PREV.addEventListener('click', () => {

    // se index_img e maggiore del valore 0
    if (index_img > 0) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');

        // aggiungi le classi per l'attivazione a quella precedente
        DOM_LI_ELEMENTS_CREATED[index_img - 1].classList.add('active');

        // incrementiamo in meno di 1 l'index_img
        index_img--;
    }
    // ALTRIMENTI:
    else {
        // usiamo specifici numeri per la precisione per rimuovere nel nostro caso e = 0
        DOM_LI_ELEMENTS_CREATED[0].classList.remove('active');

        // usiamo specifici numeri per la precisione per aggiungere nel nostro caso la lunghezza del array degli elementi - 1
        DOM_LI_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.add('active');

        // assegnamo al index_img il numero finale
        index_img = DOM_LI_ELEMENTS_CREATED.length - 1;
    }
});


// al click del pulsante prossegui
DOM_BUTTON_NEXT.addEventListener('click', () => {
    avvanzamentoDelleImg();
});

// creata una funzione esterna per poter riprenderla anche con setInterval
function avvanzamentoDelleImg() {

    // se index_img e minore del valore della lunghezza del array - 1
    if (index_img < DOM_LI_ELEMENTS_CREATED.length - 1) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');

        // aggiungi le classi per l'attivazione a quella che prossegue
        DOM_LI_ELEMENTS_CREATED[index_img + 1].classList.add('active');

        // incrementiamo in più di 1 l'index_img
        index_img++;
    }
    // ALTRIMENTI:
    else {
        // usiamo specifici numeri per la precisione per rimuovere nel nostro caso e la lunghezza del arrayi - 1
        DOM_LI_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.remove('active');

        // usiamo specifici numeri per la precisione per aggiungere nel nostro caso = 0
        DOM_LI_ELEMENTS_CREATED[0].classList.add('active');

        // assegnamo al index_img il numero di inizio = 0
        index_img = 0;
    }
}