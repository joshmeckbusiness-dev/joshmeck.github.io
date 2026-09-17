const menu=document.querySelector('.menu');const nav=document.querySelector('.site-header nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.photo-gallery img').forEach(function(img) {
    img.style.cursor = 'pointer';

    img.addEventListener('click', function() {
        const overlay = document.createElement('div');

        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.92)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.padding = '20px';
        overlay.style.boxSizing = 'border-box';

        const largeImage = document.createElement('img');
        largeImage.src = img.src;
        largeImage.alt = img.alt;
        largeImage.style.maxWidth = '95%';
        largeImage.style.maxHeight = '90%';
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

        overlay.appendChild(largeImage);
        overlay.appendChild(close);
        document.body.appendChild(overlay);

        function closeOverlay() {
            overlay.remove();
        }

        close.addEventListener('click', closeOverlay);

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeOverlay();
            }
        });

        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeOverlay();
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});
