/**
 * Injecter les logos en dessous 
 */

function addLogos(id, altEuro, altAb, classLogos) {

    const logos = document.createElement('div');

    logos.classList.add(classLogos);
    logos.innerHTML = `
        <img src="images/pdp/bio_certifs/organic_logo_eu.svg?$staticlink$" class="logos-bio__image" alt="${altEuro}"/>
        <img src="images/pdp/bio_certifs/certified_ab.svg?$staticlink$" class="logos-bio__image" alt="${altAb}"/>
    `;

    const parent = document.querySelector(id);

    if (parent) {
        parent.appendChild(logos);
    }
}

/**
 * Injecter une pastille à côté du produit dans le DOM
 */

function addPastille(id, lienImg, altEuro) {

    const pastille = document.createElement('div');

    pastille.classList.add('pastille-pdp__container');
    pastille.innerHTML = `
        <img src="${lienImg}" class="pastille-pdp__container__image" alt="${altEuro}"/>`;

    const parent = document.querySelector(id);

    if (parent) {
        parent.appendChild(pastille);
    }
}

/**
 * Quand une question est cliquée, la réponse apparait et si on reclique elle disparait
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // Injection des logos bios
    const currentURL = window.location.href;

    if (currentURL.includes('com/fr')) {
        addLogos('.m-pdp__main-details', 'certification européenne bio', 'certification agriculture biologique', 'c-product-details__logos-bios');
        addLogos('.m-pdp__images-container', 'certification européenne bio', 'certification agriculture biologique', 'm-pdp__images-container__logos-bios');
        addPastille('.m-pdp__images-container', 'images/pdp/2024/rituel_minceur/pastillex4_fr.svg?$staticlink$', 'Pack produits x4')
    }
    if (currentURL.includes('com/de')) {
        addLogos('.m-pdp__main-details', 'europäische Bio-Zertifizierung', 'Zertifizierung biologischer Landwirtschaft', 'c-product-details__logos-bios');
        addLogos('.m-pdp__images-container', 'europäische Bio-Zertifizierung', 'Zertifizierung biologischer Landwirtschaft', 'm-pdp__images-container__logos-bios');
        addPastille('.m-pdp__images-container', 'images/pdp/2024/rituel_minceur/pastillex4_de.svg?$staticlink$', 'Produktpaket x4')
    }
    if (currentURL.includes('com/int') || currentURL.includes('com/us') || currentURL.includes('com/en-ca')) {
        addLogos('.m-pdp__main-details', 'European organic certification', 'organic farming certification', 'c-product-details__logos-bios');
        addLogos('.m-pdp__images-container', 'European organic certification', 'organic farming certification', 'm-pdp__images-container__logos-bios');
        addPastille('.m-pdp__images-container', 'images/pdp/2024/rituel_minceur/pastillex4_en.svg?$staticlink$', 'Product pack x4')
    }
    if (currentURL.includes('com/it')) {
        addLogos('.m-pdp__main-details', 'Certificazione biologica europea', 'Certificazione dell\'agricoltura biologica', 'c-product-details__logos-bios');
        addLogos('.m-pdp__images-container', 'Certificazione biologica europea', 'Certificazione dell\'agricoltura biologica', 'm-pdp__images-container__logos-bios');
        addPastille('.m-pdp__images-container', 'images/pdp/2024/rituel_minceur/pastillex4_it.svg?$staticlink$', 'Product pack x4', 'Confezione di prodotti x4')
    }
})
