function toggleTheme() {
    const body = document.querySelector('body')
    if (body.dataset.bsTheme == 'light') {
        body.dataset.bsTheme = 'dark'
    } else if (body.dataset.bsTheme == 'dark') {
        body.dataset.bsTheme = 'light'
    }
}
function resizeNav() {
    const navLinksContainer = document.querySelector('.nav-links-container')
    // navLinksContainer.style.height = '40px'
    navLinksContainer.style.opacity = '1';
}
function manageSpinner() {
    const animContainer = document.querySelector('.animation-container')

    animContainer.addEventListener('transitionend', (e) => {
        if (e.target === animContainer) {
            animContainer.remove()
        }
    })
    
    const animParent = animContainer.querySelector('.parent')
    animParent.querySelector('img').addEventListener('animationend', () => {
        animContainer.style = 'opacity: 0;'
    })
    animParent.style = ''
}
function loadCardItem(item) {
    const a = document.createElement('a')
    a.setAttribute('type','button')
    a.classList.add('nav-link')
    a.dataset.bsTarget='#mi-carousel'
    a.dataset.bsSlideTo=item
    a.setAttribute('aria-label',`Slide ${item}`)
    
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
var images;
function deferImages() {
     images = document.querySelectorAll('img[defer]')
    images.forEach(img => {
        img.src = img.dataset.src;
    })
}
function preparePage() {
    resizeNav();
    manageSpinner()
    deferImages()
}
// loadCardItem(1)