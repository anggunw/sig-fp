let sections = document.querySelectorAll("h3, .container, .banner-text");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let textPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;
        if ( textPos < screenPos) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}
  