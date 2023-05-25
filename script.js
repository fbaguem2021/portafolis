/**
 * @param {String} q 
 * @returns Element | NodeListOf<Element> | null
 */
function $(q="") {
    const res = document.querySelectorAll(q)
    if (res.length === 0) { return null } 
    else if (res.length === 1) { return res[0] } 
    else { return res }
}
Element.prototype.$ = function(q="") {
    const res = this.querySelectorAll(q)
    if (res.length === 0) { return null } 
    else if (res.length === 1) { return res[0] } 
    else { return res }
}

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
    navLinksContainer.style.height = '40px'
    navLinksContainer.style.opacity = '1'

    
}