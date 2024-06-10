const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const currentLength = password.value.length;

    password.value = 'X'.repeat(currentLength);
});