document.addEventListener('DOMContentLoaded', function () {
    const imagePopup = document.getElementById('imagePopup');
    const imageTriggers = document.querySelectorAll('.image-popup-trigger');
    const carouselControls = document.querySelectorAll('#imagePopup .carousel-control-prev, #imagePopup .carousel-control-next');
    const carouselInner = imagePopup.querySelector('.carousel-inner');

    function showSingleImage(src) {
        carouselInner.innerHTML = `<div class="carousel-item active"><img src="${src}" class="d-block w-100" alt="Popup Image"></div>`;
        // Remove carousel controls
        carouselControls.forEach(control => control.style.display = 'none');
        imagePopup.style.display = 'flex';
    }

    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            if (this.id === 'image2') {
                // Reset the carousel inner to original state only for image2
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
                // Show carousel controls
                carouselControls.forEach(control => control.style.display = 'block');
                imagePopup.style.display = 'flex';
                // Remove concept art class if it exists
                imagePopup.classList.remove('concept-art-popup');
            } else if (this.id === 'image6') {
                // Special handling for concept art image
                showSingleImage(this.getAttribute('data-src'));
                // Add special class for concept art popup
                imagePopup.classList.add('concept-art-popup');
            } else {
                showSingleImage(this.getAttribute('data-src'));
                // Remove concept art class if it exists
                imagePopup.classList.remove('concept-art-popup');
            }
        });
    });

    imagePopup.addEventListener('click', (event) => {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none';
            // Remove concept art class when popup is closed
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