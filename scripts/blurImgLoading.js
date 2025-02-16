document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        rootMargin: "200px 0px",
        threshold: 0.01
    };

    const handleImageLoad = img => () => {
        img.classList.add('loaded');
    };

    // Define handleIntersection before using it in imageObserver
    const handleIntersection = entries => {
        entries
            .filter(entry => entry.isIntersecting)
            .forEach(entry => {
                const img = entry.target;
                img.addEventListener('load', handleImageLoad(img));
                if (img.complete) {
                    img.classList.add('loaded');
                }
                imageObserver.unobserve(img);
            });
    };

    const imageObserver = new IntersectionObserver(
        handleIntersection,
        observerOptions
    );

    // Select and observe images
    const images = document.querySelectorAll('img:not(.carouselItem.active)');
    images.forEach(img => {
        if (!img.loading) {
            img.loading = "lazy";
        }
        imageObserver.observe(img);
    });
});