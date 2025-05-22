
function showContent(id) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    attachPopupListeners();
}

function attachPopupListeners() {
    let images = document.querySelectorAll('.content.active .image img');

    images.forEach(img => {
        img.onclick = function() {
            let popupImage = document.querySelector('.pop-up-img');
            let popupImgElement = popupImage.querySelector('img');
            let popupTextElement = popupImage.querySelector('.popup-text');
            let popupCarouselContainer = document.getElementById('popupcarrousel');

            popupImgElement.src = this.src;
            let parentElement = this.parentElement;
            let carouElement = parentElement.querySelector('.carou');
            let textElement = this.nextElementSibling;

            if (carouElement) {
                popupCarouselContainer.innerHTML = carouElement.outerHTML;
                popupCarouselContainer.style.display = 'block';
                popupImgElement.style.display = 'none';

                $(popupCarouselContainer.querySelector('.carousel')).carousel();
            } else {
                popupCarouselContainer.innerHTML = '';
                popupImgElement.style.display = 'block';
            }

            // Vérifier si popupTextElement est un paragraphe
            if (textElement && (textElement.nodeName === 'P'|| textElement.nodeName === 'SPAN')) {
                // Récupérer et afficher le HTML complet (y compris les liens)
                let html = textElement.innerHTML;
                popupTextElement.innerHTML = html;
            }

            popupImage.style.display = 'flex';

            popupImage.querySelector('span').onclick = () => {
                popupImage.style.display = 'none';
            };

            window.onclick = function(event) {
                // Only close if clicking directly on the popup background (not on links or other content)
                if (event.target == popupImage) {
                    popupImage.style.display = 'none';
                }
            };
        };
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showContent('cat1');
});


