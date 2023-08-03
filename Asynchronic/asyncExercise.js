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

async function printFetchedData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch(error) {
        console.error('Error:', error.message);
    }
}

printFetchedData();
