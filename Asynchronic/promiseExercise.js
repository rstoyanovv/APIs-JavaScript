function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilityForSuccess = Math.random() < 0.5;
            if (probabilityForSuccess) {
                const data = {
                    message: 'Successfully fetched data!',
                    status: 'Successful'
                };
                resolve(data);
            } else {
                const errorMessage = 'Failed to fetched data!';
                reject(new Error(errorMessage));
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data.message);
        console.log(data.status);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
