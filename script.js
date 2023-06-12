// function $(q="") {
//     const res = document.querySelectorAll(q)
//     if (res.length === 0) { return null } 
//     else if (res.length === 1) { return res[0] } 
//     else { return res }
// }
// Element.prototype.$ = function(q="") {
//     const res = this.querySelectorAll(q)
//     if (res.length === 0) { return null } 
//     else if (res.length === 1) { return res[0] } 
//     else { return res }
// }

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
// loadCardItem(1)