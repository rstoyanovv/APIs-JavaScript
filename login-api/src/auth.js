document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value.toString();

        try {
            const response = await fetch('http://localhost:3000/api/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                console.log('Authentication is successful!');

            } else {
                const errorResponse = await response.json();
                console.error('Authentication failed:', errorResponse.message);
            }
        } catch (error) {
            console.error('An error occurred', error);
            // Handle network or other errors
        }
    });
});
