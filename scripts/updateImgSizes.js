function updateImageSizes() {
    const images = document.querySelectorAll('img[ sizes]');

    images.forEach(img => {
        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 500) {
            img.sizes = '500px';
        } else if (viewportWidth <= 768) {
            img.sizes = '800px';
        } else {
            img.sizes = '1200px';
        }
    });
}

window.addEventListener('resize', updateImageSizes);
document.addEventListener('DOMContentLoaded', updateImageSizes);