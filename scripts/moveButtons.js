const moveButton = (button, targetMobile, targetDesktop, isMobile) => {
    const target = isMobile ? targetMobile : targetDesktop;
    target.insertAdjacentElement(isMobile ? 'afterend' : 'beforeend', button);
    button.classList.toggle('centered-marginTop', isMobile);
};

const moveButtons = () => {
    const [button1, button2, button3] = document.querySelectorAll('.button');
    const [infoFlex1, infoFlex2, infoFlex3] = document.querySelectorAll('.infoFlex');
    const imgContainer = document.querySelector('.imgContainer');
    const projectsGrid = document.querySelector('.layoutGrid');
    const video = document.querySelector('.video');
    const isMobile = window.innerWidth < 995;

    if (button1 && button2 && infoFlex1 && infoFlex2) {
        moveButton(button1, imgContainer, infoFlex1, isMobile);
        moveButton(button3, projectsGrid, infoFlex3, isMobile);
        moveButton(button2, video, infoFlex2, isMobile);
    }
};

moveButtons();
window.addEventListener('resize', moveButtons);
