document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const thirdGrid = document.querySelectorAll('.layoutGrid')[1]; // Get the third grid

    // Function to check scroll position
    function toggleBackToTopButton() {
        const thirdGridPosition = thirdGrid.getBoundingClientRect().top;

        if (thirdGridPosition < 0) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Smooth scroll to top
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTopButton);
});