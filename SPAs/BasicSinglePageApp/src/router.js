import { renderHomePage } from './home.js';
import { renderLoginPage } from './login.js';
import { renderContact } from './contact-from.js';
import { renderInformation } from './information.js';

const routes = {
    '/' : renderHomePage,
    '/login' : renderLoginPage,
    '/information' : renderInformation,
    '/contact-form' : renderContact,
}

export function router(path){
    hideContent();

    const renderer = routes[path];
    renderer();
}

function hideContent() {
    const mainSection = document.querySelector('.main-content');

    for (let section of mainSection.children) {
        section.style.display = 'none';
    }
}