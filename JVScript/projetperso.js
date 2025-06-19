document.addEventListener('DOMContentLoaded', function () {
    const imagePopup = document.getElementById('imagePopup');
    const imageTriggers = document.querySelectorAll('.image-popup-trigger');
    const carouselControls = document.querySelectorAll('#imagePopup .carousel-control-prev, #imagePopup .carousel-control-next');
    const carouselInner = imagePopup.querySelector('.carousel-inner');

    function showCarousel(images) {
        carouselInner.innerHTML = images.map((src, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100" alt="Popup Image">
            </div>
        `).join('');
        carouselControls.forEach(control => control.style.display = 'block');
        imagePopup.style.display = 'flex';
    }

    function showSingleImage(src) {
        carouselInner.innerHTML = `<div class="carousel-item active"><img src="${src}" class="d-block w-100" alt="Popup Image"></div>`;
        // Remove carousel controls
        carouselControls.forEach(control => control.style.display = 'none');
        imagePopup.style.display = 'flex';
    }

    const closeImagePopupButton = document.getElementById('closeImagePopup');
    const closeCarouselSaginyaButton = document.getElementById('closeCarouselSaginya');

    if (closeImagePopupButton) {
        closeImagePopupButton.addEventListener('click', function() {
            imagePopup.style.display = 'none';
        });
    }

    if (closeCarouselSaginyaButton) {
        closeCarouselSaginyaButton.addEventListener('click', function() {
            const carouselSaginya = document.getElementById('carouselSaginya');
            carouselSaginya.style.display = 'none';
            imagePopup.style.display = 'none';
        });
    }

    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            if (this.id === 'image5') {
                // Handle carousel for Saginya
                showCarousel([
                    "IMG/Preview/Saginya.jpeg",
                    "IMG/Preview/3d character preview 1.png",
                    "IMG/Preview/3d character preview 2.png",
                    "IMG/Preview/3d character preview 3.png",
                    "IMG/Preview/3d character preview 4.png",
                    "IMG/Preview/3d character preview 5.png"
                ]);
                imagePopup.classList.remove('concept-art-popup');
            } else if (this.id === 'image2') {
                // Reset carousel for V.FINALE
                carouselInner.innerHTML = `
                    <div class="carousel-item active">
                        <img src="IMG/Preview/OUROBOROS_pages-to-jpg-0001.jpg" class="d-block w-100" alt="Image 1">
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/Preview/OUROBOROS_pages-to-jpg-0004.jpg" class="d-block w-100" alt="Image 2">
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/Preview/OUROBOROS_pages-to-jpg-0006.jpg" class="d-block w-100" alt="Image 3">
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/Preview/OUROBOROS_pages-to-jpg-0018.jpg" class="d-block w-100" alt="Image 4">
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/Preview/OUROBOROS_pages-to-jpg-0013.jpg" class="d-block w-100" alt="Image 5">
                    </div>
                `;
                carouselControls.forEach(control => control.style.display = 'block');
                imagePopup.style.display = 'flex';
                imagePopup.classList.remove('concept-art-popup');
            } else {
                // Default single image popup
                showSingleImage(this.getAttribute('data-src'));
                imagePopup.classList.remove('concept-art-popup');
            }
        });
    });

    imagePopup.addEventListener('click', (event) => {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none';
            imagePopup.classList.remove('concept-art-popup');
        }
    });

    carouselControls.forEach(control => {
        control.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
        });
    });
});