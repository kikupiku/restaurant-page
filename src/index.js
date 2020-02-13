import { menu as menuChoice } from './menu.js';
import { contactWrapper } from './contact.js';
import { home } from './home.js';

let content = document.getElementById('content');

let navBar = document.createElement('div');
navBar.setAttribute('class', 'navbar');

content.appendChild(navBar);

let logo = document.createElement('img');
logo.setAttribute('src', '../assets/restaurant-logo.png');
logo.setAttribute('class', 'logo');
navBar.appendChild(logo);

let name = document.createElement('h1');
name.innerHTML = 'RESTAURANT';
navBar.appendChild(name);

let linkList = document.createElement('ul');
linkList.setAttribute('class', 'link-list');

// content.appendChild(home);

// content.appendChild(menuChoice);

// content.appendChild(contactWrapper);
