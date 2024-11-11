document.querySelectorAll('.imgContainer').forEach(container => {
    const items = Array.from(container.querySelectorAll('.carouselItem'));
    const prevButton = container.querySelector('.carouselPrev');
    const nextButton = container.querySelector('.carouselNext');
    let currentIndex = 0;

    if (!items.length) return;

    const showSlide = (index) => {
        currentIndex = Math.max(0, Math.min(index, items.length - 1));
        items.forEach((item, i) => item.style.display = i === currentIndex ? 'block' : 'none');
        if (prevButton) prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
        if (nextButton) nextButton.style.display = currentIndex < items.length - 1 ? 'block' : 'none';
    };

    const changeSlide = (n) => showSlide(currentIndex + n);

    showSlide(currentIndex);

    prevButton?.addEventListener('click', () => changeSlide(-1));
    nextButton?.addEventListener('click', () => changeSlide(1));
});
