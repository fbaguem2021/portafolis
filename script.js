// window.addEventListener('load',()=>{
    // const btn = document.querySelector('#btn')
    // btn.addEventListener('click',function() { alert('este es el onclick') })
// })
// const main = ()=>{
//     const btn = document.querySelector('#btn')
//     btn.addEventListener('click',function() { alert('este es el onclick') })
// }
function toggleTheme() {
    const body = document.querySelector('body')
    if (body.dataset.bsTheme == 'light') {
        body.dataset.bsTheme = 'dark'
    } else if (body.dataset.bsTheme == 'dark') {
        body.dataset.bsTheme = 'light'
    }
}
// const navTabs = document.querySelectorAll('.nav-tabs > * > .nav-link')
// navTabs.forEach(e => {
//     e.addEventListener('click', (event) => {
//         document.querySelector('.active').classList.remove('active')
//         document.querySelector('.card:not(.hide)').classList.add('hide')
//         const btn = event.target
//         btn.classList.add('active')
//         const target = document.querySelector(btn.dataset.target)
//         target.classList.remove('hide')
//         // console.log(self.target.dataset.target)
//     })
// })
// window.addEventListener("load",main);
function moveto(self, target) {
    document.querySelector(`[data-my-item="${self}"]`).classList.remove('active')
    document.querySelector(`[data-my-item="${target}"]`).classList.add('active')
}