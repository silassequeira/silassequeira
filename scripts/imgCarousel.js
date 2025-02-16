document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.imgContainer').forEach(container => {
        const items = Array.from(container.querySelectorAll('.carouselItem'));
        const prevButton = container.querySelector('.carouselPrev');
        const nextButton = container.querySelector('.carouselNext');
        let currentIndex = 0;

        if (!items.length) return;

        const showSlide = (index) => {
            currentIndex = Math.max(0, Math.min(index, items.length - 1));
            items.forEach((item, i) => {
                item.style.display = i === currentIndex ? 'block' : 'none';
                if (i === currentIndex) {
                    const img = item.querySelector('img');
                    if (img && !img.classList.contains('loaded')) {
                        initializeLazyLoading(img);
                    }
                }
            });
            if (prevButton) prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
            if (nextButton) nextButton.style.display = currentIndex < items.length - 1 ? 'block' : 'none';
        };

        const changeSlide = (n) => showSlide(currentIndex + n);

        showSlide(currentIndex);

        if (prevButton) prevButton.addEventListener('click', () => changeSlide(-1));
        if (nextButton) nextButton.addEventListener('click', () => changeSlide(1));
    });

    const observerOptions = {
        rootMargin: "200px 0px",
        threshold: 0.01
    };

    const handleImageLoad = img => () => {
        img.classList.add('loaded');
    };

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

    const initializeLazyLoading = (img) => {
        if (!img.loading) {
            img.loading = "lazy";
        }
        imageObserver.observe(img);
    };

    document.querySelectorAll('img:not(.carouselItem img)').forEach(initializeLazyLoading);

    document.querySelectorAll('.imgContainer').forEach(container => {
        const firstSlideImg = container.querySelector('.carouselItem:first-child img');
        if (firstSlideImg) {
            initializeLazyLoading(firstSlideImg);
        }
    });
});