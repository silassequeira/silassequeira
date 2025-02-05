document.addEventListener('DOMContentLoaded', () => {
    const elements = ['backToTop', '.layoutGrid'].reduce((acc, selector) => ({
        ...acc,
        [selector === 'backToTop' ? 'button' : 'grid']:
            selector.includes('.')
                ? [...document.querySelectorAll(selector)][1]
                : document.getElementById(selector)
    }), {});

    const toggleVisibility = () =>
        elements.button.classList[elements.grid.getBoundingClientRect().top < 0 ? 'add' : 'remove']('visible');

    elements.button.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' }));

    window.addEventListener('scroll', toggleVisibility);
});