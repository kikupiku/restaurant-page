let contactWrapper = document.createElement('div');
contactWrapper.setAttribute('class', 'contact-wrapper');

let title = document.createElement('h1');
title.innerHTML = 'CONTACT US';
title.setAttribute('class', 'section-title');
contactWrapper.appendChild(title);

let address = document.createElement('p');
address.innerHTML = 'Hochenbrochenzockenallee 5 <br> 78954 Berlin <br> Telephone: 1357-1234567';
address.setAttribute('class', 'address');
contactWrapper.appendChild(address);

export { contactWrapper };
