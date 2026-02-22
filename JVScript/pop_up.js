
function showContent(id) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    // no need to reattach listeners when using delegation, but keep for backward compatibility
    attachPopupListeners();
}

function attachPopupListeners() {
    // this function is now mostly a no-op because we rely on a delegated listener below,
    // but keeping it allows manual calls if content is added dynamically
}

// delegate clicks from the document so images are always responsive
document.addEventListener('click', function(e) {
    const container = e.target.closest('.content.active .image');
    if (!container) return;

    e.stopPropagation();
    const img = container.querySelector('img');
    if (!img) return;

    let popupImage = document.querySelector('.pop-up-img');
    let popupImgElement = popupImage.querySelector('img');
    let popupTextElement = popupImage.querySelector('.popup-text');
    let popupCarouselContainer = document.getElementById('popupcarrousel');

    popupImgElement.src = img.src;
    const carouElement = container.querySelector('.carou');

    if (carouElement) {
        // clone and give a unique id so bootstrap doesn't get confused by duplicates
        const clone = carouElement.cloneNode(true);
        const uniqueId = 'carousel-' + Date.now();
        const inner = clone.querySelector('.carousel');
        if (inner) {
            inner.id = uniqueId;
            // update controls/indicators to target the new id
            clone.querySelectorAll('[data-bs-target]').forEach(btn => {
                btn.setAttribute('data-bs-target', '#' + uniqueId);
            });
        }
        popupCarouselContainer.innerHTML = '';
        popupCarouselContainer.appendChild(clone);
        popupCarouselContainer.style.display = 'block';
        popupImgElement.style.display = 'none';
        try {
            $(popupCarouselContainer.querySelector('.carousel')).carousel();
        } catch (err) {
            console.error('carousel init failed', err);
        }
    } else {
        popupCarouselContainer.innerHTML = '';
        popupImgElement.style.display = 'block';
    }

    const textElement = img.nextElementSibling;
    if (textElement && (textElement.nodeName === 'P' || textElement.nodeName === 'SPAN')) {
        popupTextElement.innerHTML = textElement.innerHTML;
    }

    popupImage.style.display = 'flex';

    popupImage.querySelector('span').onclick = () => {
        popupImage.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == popupImage) {
            popupImage.style.display = 'none';
        }
    };
});

document.addEventListener('DOMContentLoaded', function() {
    showContent('cat1');
});

document.addEventListener('DOMContentLoaded', function() {
    showContent('cat1');
});


