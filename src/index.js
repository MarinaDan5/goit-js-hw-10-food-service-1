import foodServicesTpl from '../templates/food-service.hbs';
import menuCard from './menu.json';

import './change-theme.js';
import './style.css';


const refs = {
    menuCards: document.querySelector('.js-menu'),
    cardMarkup: createMenuCards(menuCard),
}
//==============разметка========//
refs.menuCards.insertAdjacentHTML('beforeend', refs.cardMarkup);

function createMenuCards(menuCard) {
    return foodServicesTpl(menuCard)
};


