import { menu as menuChoice } from './menu.js';
import { contactWrapper } from './contact.js';
import { home } from './home.js';

let content = document.getElementById('content');
content.appendChild(home);

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
navBar.appendChild(linkList);

let createLink = () => {
  let link;

  for (let i = 0; i < 3; i++) {
    link = document.createElement('li');
    link.setAttribute('id', `link${i + 1}`);
    if (i + 1 === 1) {
      link.innerHTML = 'HOME';
    } else if (i + 1 === 2) {
      link.innerHTML = 'MENU';
    } else if (i + 1 === 3) {
      link.innerHTML = 'CONTACT';
    }

    linkList.appendChild(link);

    link.addEventListener('click', (event) => {
      if (event.target.id === 'link1') {
        content.appendChild(home);
        content.appendChild(menuChoice);
        content.appendChild(contactWrapper);
        content.removeChild(menuChoice);
        content.removeChild(contactWrapper);
      } else if (event.target.id === 'link2') {
        content.appendChild(home);
        content.appendChild(menuChoice);
        content.appendChild(contactWrapper);
        content.removeChild(home);
        content.removeChild(contactWrapper);
      } else if (event.target.id === 'link3') {
        content.appendChild(home);
        content.appendChild(menuChoice);
        content.appendChild(contactWrapper);
        content.removeChild(home);
        content.removeChild(menuChoice);
      };
    });
  }
};

createLink();
