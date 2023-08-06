import { renderHomePage } from './home.js';
import { renderLoginPage } from './login.js';
import { renderContact } from './contact-from.js';
import { renderCarModels } from './car-models.js';
import { renderUserAccount } from './user-account.js';

const routes = {
    '/' : renderHomePage,
    '/login' : renderLoginPage,
    '/carModels' : renderCarModels,
    '/contact-form' : renderContact,
    '/user-account' : renderUserAccount,
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
