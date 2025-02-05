document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        rootMargin: "50px 0px",
        threshold: 0.01
    };

    const handleImageLoad = img => () =>
        img.classList.add('loaded');

    const handleIntersection = entries =>
        entries
            .filter(entry => entry.isIntersecting)
            .forEach(entry => {
                const img = entry.target;
                img.addEventListener('load', handleImageLoad(img));
                img.complete && img.classList.add('loaded');
                imageObserver.unobserve(img);
            });

    const imageObserver = new IntersectionObserver(
        handleIntersection,
        observerOptions
    );

    [...document.querySelectorAll('img')]
        .forEach(img => imageObserver.observe(img));
});