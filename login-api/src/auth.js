document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                console.log('Authentication is successful!');
                // Redirect the user or perform other actions here
            } else {
                console.error('Authentication failed!');
                // Handle failed authentication, show error message, etc.
            }
        } catch (error) {
            console.error('An error occurred', error);
            // Handle network or other errors
        }
    });
});
