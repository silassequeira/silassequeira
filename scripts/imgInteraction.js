const applyHoverEffects = () => {
    document.querySelectorAll('.imgContainer').forEach(container => {
        const isGoSides = container.classList.contains('goSides');
        const images = container.querySelectorAll('img');

        images.forEach(img => {
            container.addEventListener('mousemove', ({ clientX, clientY }) => {
                const { left, top, width, height } = container.getBoundingClientRect();
                const position = isGoSides ? clientX - left : clientY - top;
                const dimension = isGoSides ? width : height;

                img.style.objectPosition = 
                    position < dimension / 3 ? (isGoSides ? 'center left' : 'center top') :
                    position > (2 * dimension) / 3 ? (isGoSides ? 'center right' : 'center bottom') :
                    'center center';
            });

            container.addEventListener('mouseleave', () => {
                img.style.objectPosition = isGoSides ? 'center left' : 'center top';
            });
        });
    });
};

const enableMobileClickEffect = () => {
    document.querySelectorAll('.imgContainer').forEach(container => {
        const isGoSides = container.classList.contains('goSides');
        const images = container.querySelectorAll('img');

        images.forEach(img => {
            let isInitial = true;
            img.style.objectPosition = isGoSides ? 'center left' : 'center top';

            container.addEventListener('click', () => {
                if (window.innerWidth < 995) {
                    img.style.objectPosition = isInitial 
                        ? (isGoSides ? 'center right' : 'center bottom') 
                        : (isGoSides ? 'center left' : 'center top');
                    isInitial = !isInitial;
                }
            });
        });
    });
};

applyHoverEffects();
enableMobileClickEffect();

window.addEventListener('resize', () => {
    if (window.innerWidth < 995) enableMobileClickEffect();
});
