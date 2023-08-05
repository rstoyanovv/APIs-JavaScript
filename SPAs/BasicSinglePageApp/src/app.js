import { router } from './router.js';

const navigationElement = document.querySelector('.navigation');
navigationElement.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
});