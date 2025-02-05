const applyHoverEffects = () => {
    const calcObjectPosition = (position, dimension, isGoSides) => {
        const pos = position / dimension;
        return pos < 1 / 3 ? (isGoSides ? 'center left' : 'center top') :
            pos > 2 / 3 ? (isGoSides ? 'center right' : 'center bottom') :
                'center center';
    };

    const updateStyles = (elements, styles) =>
        elements.forEach(el => Object.assign(el.style, styles));

    [...document.querySelectorAll('.imgContainer')].forEach(container => {
        const isGoSides = container.classList.contains('goSides');
        const images = [...container.querySelectorAll('img')];
        let isScrolling = false;

        const handlers = {
            mousemove: event => {
                if (isScrolling) return;

                const { left, top, width, height } = container.getBoundingClientRect();
                const position = isGoSides ? event.clientX - left : event.clientY - top;
                const dimension = isGoSides ? width : height;

                updateStyles(images, {
                    height: isGoSides ? 'revert-layer' : '100%',
                    objectPosition: calcObjectPosition(position, dimension, isGoSides)
                });
            },

            click: () => {
                isScrolling = true;
                updateStyles(images, {
                    height: isGoSides ? 'revert-layer' : 'auto',
                    width: isGoSides ? 'auto' : null
                });
                Object.assign(container.style, {
                    overflowX: isGoSides ? 'scroll' : 'hidden',
                    overflowY: isGoSides ? 'hidden' : 'scroll'
                });
            },

            mouseleave: () => {
                isScrolling = false;
                updateStyles(images, {
                    height: isGoSides ? 'revert-layer' : '100%',
                    width: isGoSides ? '100%' : null,
                    objectPosition: isGoSides ? 'center left' : 'center top'
                });
                Object.assign(container.style, {
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                });
            }
        };

        Object.entries(handlers).forEach(([event, handler]) =>
            container.addEventListener(event, handler));
    });
};

applyHoverEffects();