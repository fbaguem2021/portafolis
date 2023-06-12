import { Video } from './video.js';
const video = Video.create('#mi-video');

const modal = document.querySelector('.video-modal')

const toggler = document.querySelector('#video-toggler')
const buttons = document.querySelectorAll('.video-buttons > button');

modal?.querySelector('.modal-background').addEventListener('click', () => {
    modal.style.opacity = 0
    setTimeout(()=>{
        // modal.classList.add('hide')
        modal.setAttribute('class', 'video-modal floating hide')
    },500)
})

toggler?.addEventListener('click',async() => {
    // modal.classList.remove('hide')
    modal.setAttribute('class', 'video-modal floating')
    setTimeout(() => {
        modal.style.opacity = 1
    },20)
})
buttons?.forEach(btn => {
    if (btn instanceof HTMLElement) {
        btn.addEventListener('click', () => {
            const moment = btn.dataset.videoMoment;
            video?.goto(Number(moment));
        });
    }
});
// toggler.click()