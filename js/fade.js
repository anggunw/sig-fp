const body = document.querySelector('body');

const fade = () => {
    setTimeout(() => {
        body.classList.toggle('fade-out');
    }, 200);
}

body.addEventListener('load', fade());