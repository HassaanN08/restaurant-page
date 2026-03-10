import menuItems from '../helper-functions/helpers.js';
import heroImage from '../assets/slide01.webp';


const MenuPage = () => {
    const pageContainer = document.querySelector('#content');

    const pageElements = {
        container: document.createElement('div'),
        hero: document.createElement('div'),
        heading: document.createElement('h2'),
        subHeading: document.createElement('h4'),
        cardsWrap: document.createElement('div'),
    }

    pageElements.container.classList.add('menu-container');
    pageElements.hero.classList.add('menu-hero');
    pageElements.heading.classList.add('menu-heading');
    pageElements.subHeading.classList.add('menu-subheading');
    pageElements.cardsWrap.classList.add('menu-cards-wrap');

    pageElements.heading.innerHTML = 'Discover Our Delicious Menu';
    pageElements.subHeading.textContent = 'Savor the taste of flame-grilled perfection with every delicious bite. Our expertly crafted dishes are designed to tantalize your taste buds.';

    pageContainer.append(pageElements.container);
    pageElements.container.append(pageElements.hero, pageElements.cardsWrap)
    pageElements.hero.append(pageElements.heading, pageElements.subHeading);
    
    for (let i = 0; i < menuItems.length; i++) {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('h4');
        const price = document.createElement('h6');

        card.dataset.id = menuItems[i].id;
        card.classList.add('card', `card-${card.dataset.id}`);
        img.classList.add('image');
        img.src = menuItems[i].imgSrc;
        name.textContent = menuItems[i].name;
        price.textContent = 'Rs. ' + menuItems[i].price;

        pageElements.cardsWrap.append(card);
        card.append(img, name, price);
    }
}

export default MenuPage;