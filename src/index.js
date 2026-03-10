import aboutPage from './tabs/about.js';
import homePage from './tabs/home.js';
import menuPage from './tabs/menu.js';
import './styles.css';

const mainContainer = document.querySelector('#content');
const body = document.querySelector('body');

const removeContent = () => {
    mainContainer.replaceChildren();
}

document.addEventListener('DOMContentLoaded', (e) => {
    homePage();
})

body.addEventListener('click', (e) => {
    if (e.target.id == 'home') {
        e.preventDefault();
        removeContent();
        homePage();
    } else if (e.target.id == 'menu' || e.target.dataset.item == 'menu') {
        e.preventDefault();
        removeContent();
        menuPage();
    } else if (e.target.id == 'about') {
        e.preventDefault();
        removeContent();
        aboutPage();
    }
})