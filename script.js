window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const text1 = document.getElementById('text1');

    text1.addEventListener('animationend', () => {
        loader.classList.add('loader-hidden');
    });
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
        document.body.style.overflowY = 'auto';
    });
});