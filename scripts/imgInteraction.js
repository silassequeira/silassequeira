const applyHoverEffects = () => {
    document.querySelectorAll('.imgContainer').forEach(container => {
        const isGoSides = container.classList.contains('goSides');
        const isGoSidesBoolean = isGoSides ? true : false;
        const images = container.querySelectorAll('img');
        let isScrolling = false;

        images.forEach(img => {
            const updateObjectPosition = ({ clientX, clientY }) => {
                if (isScrolling) return;

                const { left, top, width, height } = container.getBoundingClientRect();
                const position = isGoSides ? clientX - left : clientY - top;
                const dimension = isGoSides ? width : height;

                img.style.objectPosition =
                    position < dimension / 3 ? (isGoSides ? 'center left' : 'center top') :
                        position > (2 * dimension) / 3 ? (isGoSides ? 'center right' : 'center bottom') :
                            'center center';
            };

            container.addEventListener('mousemove', (event) => {
                if (!isScrolling && !isGoSidesBoolean) {
                    images.forEach(image => image.style.height = "100%");
                    updateObjectPosition(event);
                } else if (isGoSidesBoolean) {
                    images.forEach(image => {
                        image.style.height = "revert-layer";
                    });
                    updateObjectPosition(event);
                }
            });

            container.addEventListener('click', () => {
                isScrolling = true;
                images.forEach(image => {
                    if (isGoSides) {
                        image.style.height = "revert-layer";
                        image.style.width = "auto";
                        container.style.overflowX = "scroll";
                        container.style.overflowY = "hidden";
                    } else {
                        image.style.height = "auto";
                        container.style.overflowY = "scroll";
                    }
                });
            });

            container.addEventListener('mouseleave', () => {
                isScrolling = false;
                images.forEach(image => {
                    if (isGoSidesBoolean) {
                        image.style.height = "revert-layer";
                        image.style.width = "100%";
                        image.style.objectPosition = 'center left';
                        container.style.overflowX = "hidden";
                    } else {
                        image.style.height = "100%";
                        image.style.objectPosition = 'center top';
                    }
                });
                container.style.overflowY = "hidden";
            });
        });
    });
};

applyHoverEffects();
