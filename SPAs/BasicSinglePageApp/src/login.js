import { router } from './router.js'

const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');
const loginMessage = document.querySelector('.login-message');

export function renderLoginPage() {
    loginSection.style.display = 'block';
}

export function loginHandler() {

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameInput = loginForm.elements.username;
        const passwordInput = loginForm.elements.password;

        const username = usernameInput.value;
        const password = passwordInput.value;

        const isLoginSuccessful = loginProcess(username, password);

        if (isLoginSuccessful) {
            router('/user-account');
        } else {
            loginMessage.style.display = 'block';
        }

        usernameInput.value = '';
        passwordInput.value = '';
    });
}

function loginProcess(username, password) {
    const users = {
        Peter : 'password123',
        George : 'password111',
        Maria : 'password222',
    };

    if(users.hasOwnProperty(username) && users[username] === password){
        return true;
    } else {
        return false;
    }
}
