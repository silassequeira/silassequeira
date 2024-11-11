const moveButton = (button, targetMobile, targetDesktop, isMobile) => {
    const target = isMobile ? targetMobile : targetDesktop;
    target.insertAdjacentElement(isMobile ? 'afterend' : 'beforeend', button);
    button.classList.toggle('centered-marginTop', isMobile);
};

const moveButtons = () => {
    const [button1, button2] = document.querySelectorAll('.button');
    const [infoFlex1, infoFlex2] = document.querySelectorAll('.infoFlex');
    const imgContainer = document.querySelector('.imgContainer');
    const projectsGrid = document.querySelector('.layoutGrid');
    const isMobile = window.innerWidth < 995;

    if (button1 && button2 && infoFlex1 && infoFlex2) {
        moveButton(button1, imgContainer, infoFlex1, isMobile);
        moveButton(button2, projectsGrid, infoFlex2, isMobile);
    }
};

moveButtons();
window.addEventListener('resize', moveButtons);
