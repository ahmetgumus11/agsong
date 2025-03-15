document.addEventListener('DOMContentLoaded', () => {
    const fadeButton = document.getElementById('fadeButton');
    let isFading = false;

    fadeButton.addEventListener('click', () => {
        if (!isFading) {
            fadeButton.classList.add('fade-effect');
            fadeButton.textContent = 'Stop Fade';
            isFading = true;
        } else {
            fadeButton.classList.remove('fade-effect');
            fadeButton.textContent = 'Fade Effect';
            isFading = false;
        }
    });
});