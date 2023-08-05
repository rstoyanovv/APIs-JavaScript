const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    console.log(`Successful submit with username: ${username} and password: ${password}`);
});

export function renderLoginPage() {
    loginSection.style.display = 'block';
}