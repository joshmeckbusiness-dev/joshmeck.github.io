const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const images = Array.from(document.querySelectorAll('.photo-gallery img, .brand-logos img'));
images.forEach((img, index) => {
  img.style.cursor = 'pointer';

  img.addEventListener('click', () => {
    let currentIndex = index;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.94)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '99999';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';

    const largeImage = document.createElement('img');
    largeImage.style.maxWidth = '85%';
    largeImage.style.maxHeight = '85%';
    largeImage.style.objectFit = 'contain';
    largeImage.style.borderRadius = '4px';

    const close = document.createElement('button');
    close.innerHTML = '&times;';
    close.style.position = 'absolute';
    close.style.top = '20px';
    close.style.right = '25px';
    close.style.background = 'none';
    close.style.border = 'none';
    close.style.color = 'white';
    close.style.fontSize = '45px';
    close.style.cursor = 'pointer';

    const previous = document.createElement('button');
    previous.innerHTML = '&#10094;';
    previous.style.position = 'absolute';
    previous.style.left = '20px';
    previous.style.top = '50%';
    previous.style.transform = 'translateY(-50%)';
    previous.style.background = 'rgba(0,0,0,0.45)';
    previous.style.border = 'none';
    previous.style.color = 'white';
    previous.style.fontSize = '40px';
    previous.style.padding = '10px 18px';
    previous.style.cursor = 'pointer';
    previous.style.borderRadius = '5px';

    const next = document.createElement('button');
    next.innerHTML = '&#10095;';
    next.style.position = 'absolute';
    next.style.right = '20px';
    next.style.top = '50%';
    next.style.transform = 'translateY(-50%)';
    next.style.background = 'rgba(0,0,0,0.45)';
    next.style.border = 'none';
    next.style.color = 'white';
    next.style.fontSize = '40px';
    next.style.padding = '10px 18px';
    next.style.cursor = 'pointer';
    next.style.borderRadius = '5px';

    function showImage() {
      largeImage.src = images[currentIndex].src;
      largeImage.alt = images[currentIndex].alt;
    }

    previous.addEventListener('click', (event) => {
      event.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });

    next.addEventListener('click', (event) => {
      event.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });

    close.addEventListener('click', (event) => {
      event.stopPropagation();
      overlay.remove();
    });

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.remove();
      }
    });

    overlay.appendChild(largeImage);
    overlay.appendChild(previous);
    overlay.appendChild(next);
    overlay.appendChild(close);
    document.body.appendChild(overlay);

    showImage();

    function escHandler(event) {
      if (event.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
      }
    }

    document.addEventListener('keydown', escHandler);
  });
});
